import React from 'react';

const Accordion = ({ title, expand, onClick }) => {
  return (
    <div>
      <dt className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
        {title}
      </dt>
      <dd
        className={expand ? 'content is-expanded' : 'content'}
        onClick={onClick}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
          interdum diam. Donec interdum porttitor risus non bibendum. Maecenas
          sollicitudin eros in quam imperdiet placerat. Cras justo purus,
          rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec
          elit faucibus condimentum. Donec facilisis consectetur enim sit amet
          varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget
          mauris. Aliquam dapibus, ante quis fringilla feugiat, mauris risus
          condimentum massa, at elementum libero quam ac ligula. Pellentesque at
          rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu
          dolor venenatis mauris placerat tristique eget id dolor. Quisque
          blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
          elementum tincidunt.
        </p>
      </dd>
    </div>
  );
};

export default Accordion;
