/**
 * Describes the props accepted by Button.
 */
export interface ButtonProps {
  /**
   * Called when the button is clicked.
   *
   * @remarks
   * When omitted, clicking the button does nothing, because it never submits an enclosing form.
   */
  onClick?: () => void;
}

/**
 * Renders a button with the fixed label "Button".
 *
 * @remarks
 * The button uses `type="button"`, so placing it inside a form does not trigger a submit.
 */
const Button = ({ onClick }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      Button
    </button>
  );
};

export default Button;
