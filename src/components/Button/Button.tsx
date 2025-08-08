//Ejemplo de componente tonto -> porque no tiene la lógica solo se usa para estética ya que no tiene estado

//Se hace con interface porque es mas limpio de leer
interface Props {
  label: string;
  className?: string; //? para decir que no es un campo obligatorio
  parenMethod: () => void;
}
export const Button = ({ label, className, parenMethod }: Props) => {
  //Las llamadas de los métodos se debe ser sin () ya que de esa forma no llamas la referencia de la función creada
  //En este ejemplo parenMethod hace llamado de su referencia, si lo hace parenMethod() estas creando una nueva referencia por lo que el uso de la memoria se excede
  return (
    <button className={className} onClick={parenMethod}>
      {label}
    </button>
  );
};
