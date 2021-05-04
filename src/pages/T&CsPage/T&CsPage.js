import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './T&CsPage.scss';
import { useHistory } from 'react-router';

const TCsPage = () => {
  const history = useHistory();

  const getBack = () => {
    history.push('/');
  };
  return (
    <>
      <Header isUsedOnSecondaryPage secondaryTitle='T&Cs' />
      <div className='tcs'>
        <div className='tcs__wrapper'></div>
        <div className='tcs__container'>
          <p className='tcs__tittle'>Terms of Use</p>
          <div className='splitter'></div>
          <span className='tcs__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Convallis a cras semper auctor neque vitae tempus. Sed turpis
            tincidunt id aliquet risus feugiat in ante metus. Aenean pharetra
            magna ac placerat vestibulum lectus mauris. Nullam vehicula ipsum a
            arcu cursus. Eu augue ut lectus arcu. In hac habitasse platea
            dictumst quisque sagittis purus sit. Phasellus egestas tellus rutrum
            tellus pellentesque eu tincidunt tortor. Faucibus et molestie ac
            feugiat. Sagittis vitae et leo duis. Sapien eget mi proin sed libero
            enim sed faucibus.
            <br></br>
            <br></br>A diam maecenas sed enim ut sem. Integer malesuada nunc vel
            risus commodo viverra maecenas accumsan. Faucibus et molestie ac
            feugiat sed lectus vestibulum mattis ullamcorper. In aliquam sem
            fringilla ut morbi tincidunt augue. Enim nec dui nunc mattis enim ut
            tellus elementum sagittis. Tortor consequat id porta nibh.
            Scelerisque varius morbi enim nunc faucibus a. Arcu non sodales
            neque sodales ut. Mauris vitae ultricies leo integer malesuada nunc.
            Cursus risus at ultrices mi tempus. Neque vitae tempus quam
            pellentesque. Quis eleifend quam adipiscing vitae proin sagittis
            nisl rhoncus. Erat pellentesque adipiscing commodo elit at
            imperdiet. Elit eget gravida cum sociis natoque penatibus et magnis
            dis. Scelerisque felis imperdiet proin fermentum leo vel. Varius vel
            pharetra vel turpis nunc eget lorem dolor sed. Pulvinar mattis nunc
            sed blandit libero volutpat sed. Massa eget egestas purus viverra.
            Duis tristique sollicitudin nibh sit amet. Turpis massa tincidunt
            dui ut ornare lectus sit amet. Tortor id aliquet lectus proin nibh
            nisl condimentum. Diam vulputate ut pharetra sit amet aliquam id.
            Odio facilisis mauris sit amet massa vitae tortor condimentum
            lacinia.
            <br></br>
            <br></br>
            Pretium quam vulputate dignissim suspendisse in est ante. Maecenas
            ultricies mi eget mauris pharetra. Tristique senectus et netus et
            malesuada fames. Est placerat in egestas erat. Tincidunt vitae
            semper quis lectus. Id consectetur purus ut faucibus. Curabitur
            gravida arcu ac tortor dignissim convallis aenean. Ac orci phasellus
            egestas tellus rutrum tellus pellentesque eu. Vitae justo eget magna
            fermentum iaculis eu non diam phasellus. Consectetur adipiscing elit
            duis tristique sollicitudin nibh sit. Accumsan sit amet nulla
            facilisi. Nulla malesuada pellentesque elit eget gravida. Ultricies
            integer quis auctor elit sed vulputate mi sit. Laoreet id donec
            ultrices tincidunt. Fringilla urna porttitor rhoncus dolor purus non
            enim. Suspendisse ultrices gravida dictum fusce ut placerat orci
            nulla pellentesque. Amet cursus sit amet dictum sit. Sit amet tellus
            cras adipiscing enim eu turpis. Metus aliquam eleifend mi in.
            Convallis a cras semper auctor neque vitae tempus quam. Nec
            tincidunt praesent semper feugiat nibh. Interdum posuere lorem ipsum
            dolor sit amet.
            <br></br>
            <br></br>
            Orci phasellus egestas tellus rutrum tellus pellentesque eu
            tincidunt. Sem nulla pharetra diam sit amet. Sapien pellentesque
            habitant morbi tristique senectus et netus et. Eget nunc lobortis
            mattis aliquam faucibus purus. Vitae ultricies leo integer
            malesuada. Velit sed ullamcorper morbi tincidunt ornare massa eget
            egestas. Phasellus vestibulum lorem sed risus ultricies tristique.
            Mi quis hendrerit dolor magna eget est lorem ipsum. Suspendisse
            ultrices gravida dictum fusce ut placerat orci. Nulla facilisi morbi
            tempus iaculis urna. Eget nullam non nisi est sit amet facilisis
            magna etiam. Tristique senectus et netus et malesuada fames ac. Eget
            egestas purus viverra accumsan in nisl nisi scelerisque. Sed
            adipiscing diam donec adipiscing tristique risus nec feugiat in.
            Ultricies mi quis hendrerit dolor. Mi eget mauris pharetra et
            ultrices neque. Augue eget arcu dictum varius. Tellus id interdum
            velit laoreet id. Egestas congue quisque egestas diam in arcu cursus
            euismod. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames. Nec ultrices dui sapien eget mi.
          </span>
          <div className='tcs__btn-wrapper'>
            <button className='tcs__btn' onClick={getBack}>
              GO HOME
            </button>
          </div>
        </div>
      </div>
      <Footer isUsedOnSecondaryPage />
    </>
  );
};

export default TCsPage;
