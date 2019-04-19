import React from 'react';
import '../scss/index.scss';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Favicon from '../assets/icons/favicon.png';
import {createStore} from "redux";
import {Provider} from "react-redux";
import withRedux from "next-redux-wrapper";

const reducer = (state = {foo: ''}, action) => {
	switch (action.type) {
			case 'FOO':
					return {...state, foo: action.payload};
			default:
					return state
	}
};

const makeStore = (initialState, options) => {
	return createStore(reducer, initialState);
};

class Project extends App {

	static async getInitialProps({Component, ctx}) {
		ctx.store.dispatch({type: 'FOO', payload: 'foo'});
		const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
		return {pageProps};
	}

	render() {
		const {Component, pageProps, store} = this.props;

    return (
			<Container>
				<Provider store={store}>
					<Head>
						<meta charSet="utf-8" />
						<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
						<link rel="icon" href={Favicon} />
					</Head>
					<Layout>
						<Component />
					</Layout>
				</Provider>
			</Container>
		)
	}
}

export default withRedux(makeStore)(Project);