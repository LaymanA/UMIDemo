import yayJpg from '../assets/yay.jpg';

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <div>commit1</div>
      <div>commit2</div>
      <div>commit3</div>
      <div>commit4</div>
    </div>
  );
}
