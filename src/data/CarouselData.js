import gameLogo from '../images/website-game-logo.png'
import encriptionLogo from '../images/website-encription-logo.png'
import restaurantLogo from '../images/website-restaurant-logo.png'

// CarouselData.js
const CarouselData = [
    {
      id: 1,
      title: "Game site",
      description: "In this website there is some nice games to pass the time",
      img: gameLogo,
      state: {
        rating: 5.0,
        revieCount: "מספר הצפיות באתר"
      },
      online: false,
      link: "#" 
    },
    {
      id: 2,
      title: "encreption",
      description: "description about website",
      img: encriptionLogo,
      state: {
        rating: 5.0,
        revieCount: "מספר הצפיות באתר"
      },
      online: true,
      link: "#"
    },
    {
      id: 3,
      title: "Elchanano",
      description: "A site for a prestigious meat restaurant in the center of the country Responsive and modern site",
      img: restaurantLogo,
      state: {
        rating: 5.0,
        revieCount: "מספר הצפיות באתר"
      },
      online: true,
      link: "https://rfiftr.github.io/Elchanano/"
    }
  ];
  
  export default CarouselData;
  