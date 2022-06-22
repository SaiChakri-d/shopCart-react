function Footer() {
  return (
    <>
      <div className="card">
        <div className="card-header " style={{ textAlign: "center" }}>
          <b> Designed by DSC</b>
        </div>
        <div className="card-body">
          <blockquote
            className="blockquote mb-0"
            style={{ textAlign: "center" }}
          >
            <p>Arise, awake, and stop not till the goal is reached.</p>
            <footer className="blockquote-footer">
              Swamy Vivekananda{" - "}
              <cite title="Source Title">Katha Upanishad</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </>
  );
}

export default Footer;
