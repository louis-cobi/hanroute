import Dice from 'react-dice-roll';

import './styles.css';

function Page2() {
  const dice1 = [
    'https://imagizer.imageshack.com/img924/6879/eWIpv1.png',
    'https://imagizer.imageshack.com/img922/4978/s2ia6h.png',
    'https://imagizer.imageshack.com/img924/3272/tJuCNx.png',
    'https://imagizer.imageshack.com/img924/874/t1ka0P.png',
    'https://imagizer.imageshack.com/img922/3693/y59RYa.png',
    'https://imagizer.imageshack.com/img924/1553/pUVEKy.png',
  ];

  const dice2 = [
    'https://imagizer.imageshack.com/img924/627/Zpvkzu.png',
    'https://imagizer.imageshack.com/img922/6488/fNsGnH.png',
    'https://imagizer.imageshack.com/img922/1416/dK6R6G.png',
    'https://imagizer.imageshack.com/img924/2202/GdrAFx.png',
    'https://imagizer.imageshack.com/img923/1008/7SqY6O.png',
    'https://imagizer.imageshack.com/img922/2210/SbTyPp.png',
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
