import "./AuthContainer.css";

export const AuthContainer = ({ children }) => {
  return (
    <section>
      <main class="main-content">
        <div class="login-container card-shadow">{children}</div>
      </main>
    </section>
  );
};
