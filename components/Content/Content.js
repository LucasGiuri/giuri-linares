import React from 'react';
import { getNotices } from '../../apis/notices';
import Image from '../Image/Image';
import './Content.scss';

const Content = () => {
	const notices = getNotices();

	return (
		<div className="content">
			{notices.map(notice => {
				const { id, image, title, subtitle, text } = notice;

				return (
					<div className="content__notice" key={id}>
						<div className="content__notice__photo">
							<Image imageSrc={image} alt="" />
						</div>
						<div className="content__notice__body">
							<h2 className="content__notice__body--title">{title}</h2>
							<h3 className="content__notice__body--subtitle">{subtitle}</h3>
							<p className="content__notice__body--text">{text}</p>
						</div>
					</div>
				)
			})}
			</div>
	);
}

export default Content;