import "./App.css";
/** Tạo component Feature bằng arrow function */
const Feature = () => {
  return (
    <div className="feature">
      <img src="" alt="Feature" className="feature-image" />
      <h3 className="feature-title">Feature Title</h3>
      <p className="feature-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        quaerat distinctio illum inventore, doloremque corporis? Voluptatum
        maxime dignissimos incidunt, eveniet omnis quam, culpa dolorum
        repellendus, explicabo ipsam in natus suscipit.
      </p>
    </div>
  );
};
/** End Feature */

const App = () => {
  return (
    <>
      <Feature />
      <Feature />
      <Feature />
    </>
  );
};

export default App;
