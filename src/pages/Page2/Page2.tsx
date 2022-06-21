import Dice from 'react-dice-roll';

import './styles.css';

function Page2() {
  const dice1 = [
    'https://imagizer.imageshack.com/img923/2142/7TcyCy.png',
    'https://imagizer.imageshack.com/img923/1822/ST7vEp.png',
    'https://imagizer.imageshack.com/img924/7038/jQWboH.png',
    'https://imagizer.imageshack.com/img922/3003/wEsmUK.png',
    'https://imagizer.imageshack.com/img924/3087/bJNg7v.png',
    'https://imagizer.imageshack.com/img922/9082/GMPtl4.png',
  ];

  const dice2 = [
    'https://imagizer.imageshack.com/img922/162/r9xIoH.png',
    'https://imagizer.imageshack.com/img924/3162/GqMt6O.png',
    'https://imagizer.imageshack.com/img923/3193/iQUCll.png',
    'https://imagizer.imageshack.com/img924/9185/4LOkfJ.png',
    'https://imagizer.imageshack.com/img923/9311/EriXlK.png',
    'https://imagizer.imageshack.com/img922/1740/opwOil.png',
  ];

  return (
    <div className="App">
      <h1>Dés virtuels des questions</h1>
      <div className="dices">
        <div className="diceOne">
          <Dice size={200} faces={dice1} />
        </div>
        <div className="diceTwo">
          <Dice size={200} faces={dice2} />
        </div>
      </div>
    </div>
  );
}

export default Page2;
