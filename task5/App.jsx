function ImageGallery() {
  return (
    <div style={{ display: 'flex' }}>
      <img src="https://placehold.co/150" alt="Картинка 1" />
      <img src="https://placehold.co/150" alt="Картинка 2" />
      <img src="https://placehold.co/150" alt="Картинка 3" />
    </div>
  );
}

export default function App() {
  return <ImageGallery />;
}
