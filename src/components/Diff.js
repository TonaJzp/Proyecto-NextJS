function Diff() {
  return (
    <figure className="diff aspect-16/9 w-full" tabIndex={0}>
      <div className="diff-item-1" role="img" tabIndex={0}>
        <img
          alt="daisy"
          src="/dia.webp"
        />
      </div>
      <div className="diff-item-2" role="img">
        <img
          alt="daisy"
          src="/noche.webp"
        />
      </div>
      <div className="diff-resizer"></div>
    </figure>
  );
}

export default Diff;
