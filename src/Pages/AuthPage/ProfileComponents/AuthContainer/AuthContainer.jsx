import "./AuthContainer.css";

export const AuthContainer = ({ children }) => {
  return (
    <section>
      <main className="main-content">
        <form className="login-container card-shadow">{children}</form>
      </main>
    </section>
  );
};
