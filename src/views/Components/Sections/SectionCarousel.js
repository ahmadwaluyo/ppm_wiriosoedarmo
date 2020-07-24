import React from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize-css/normalize.css';
import './slider-animations.css';
import './styles.css';
 

const content = [
	{
		title: 'Vulputate Mollis Ultricies Fermentum Parturient',
		description:
		'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
		button: 'Daftar',
		image: 'https://firebasestorage.googleapis.com/v0/b/storageahmad-134a6.appspot.com/o/rsz_background-header.jpg?alt=media&token=f356647b-db18-45eb-855e-88ec438c0520'
	},
	{
		title: 'Tortor Dapibus Commodo Aenean Quam',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'Daftar',
		image: 'https://firebasestorage.googleapis.com/v0/b/storageahmad-134a6.appspot.com/o/rsz_2backgroundheader.jpg?alt=media&token=73b53602-e71e-4cc1-b7fe-4a815123ad67'
	},
	{
		title: 'Phasellus volutpat metus',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
		button: 'Daftar',
		image: 'https://firebasestorage.googleapis.com/v0/b/storageahmad-134a6.appspot.com/o/1.jpg?alt=media&token=0e390fb0-2403-431a-b245-bf1261e1be6d',
	}
];

export default function SectionCarousel () {
  return (
    <div>
		<Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
          key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button className="btn">{item.button}</button>
					</div>
				</div>
			))}
		</Slider>
	</div>
  )
}
