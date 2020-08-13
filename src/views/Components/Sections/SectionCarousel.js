import React from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize-css/normalize.css';
import './slider-animations.css';
import './styles.css';
 

const content = [
	{
		title: 'Learning Vision',
		description:
		'Mencerminkan Pembelajaran Abad ke-21 Student Center Learning, yang Terintegrasi dengan Nilai-Nilai Keislaman',
		button: 'Daftar',
		image: 'https://firebasestorage.googleapis.com/v0/b/storageahmad-134a6.appspot.com/o/rsz_background-header.jpg?alt=media&token=f356647b-db18-45eb-855e-88ec438c0520'
	},
	{
		title: `Tahfidz Al-Qur'an`,
		description:
		`Bersahabat dengan Al-Qur'an, Sebagai Pedoman Hidup Sehari-hari`,
		button: 'Daftar',
		image: 'https://firebasestorage.googleapis.com/v0/b/storageahmad-134a6.appspot.com/o/rsz_2backgroundheader.jpg?alt=media&token=73b53602-e71e-4cc1-b7fe-4a815123ad67'
	},
	{
		title: 'Character Building',
		description:
		`Menumbuhkan jiwa kemandirian dan kejujuran sebagai modal penting dalam bekal dakwah dan pengabdian kepada agama setelah lulus`,
		button: 'Daftar',
		image: 'https://firebasestorage.googleapis.com/v0/b/storageahmad-134a6.appspot.com/o/1.jpg?alt=media&token=0e390fb0-2403-431a-b245-bf1261e1be6d',
	}
];

export default function SectionCarousel (props) {
  const { history } = props.props;
  const handleRender = () => {
	history.push("/admission")
  }
  return (
    <div>
		<Slider className="slider-wrapper" autoplay={5000} duration={4000}>
			{content.map((item, index) => (
				<div
          			key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button onClick={handleRender} className="btn">{item.button}</button>
					</div>
				</div>
			))}
		</Slider>
	</div>
  )
}
