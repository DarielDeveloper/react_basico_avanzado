_Javascript ->React -> Biblioteca_

React-> Facebook \ Meta
CSR -> Renderizado del lado al cliente ->SPA

Librería para generar aplicaciones basadas en componentes

## React Componente =>

- HTML -> tiene la capacidad de modificar el modelo
- CCS
- TypeScript / JavaScript

## React -> Se hace popular

- Rápido
- Fácil de aprender
- Simple
- Comodo

Librería o Biblioteca -> Solamente tiene codigo de terceros que aumenta la funcionalidad.

## Cuando utilizar React ?

- App a medida
- Simplicidad
- Minimiza el peso de la App
- Prototypes
- SPA - CSR - Todo al lado del cliente - Privadas

## Framework de React:

1- Solidjs ->Es como debería haber sido React desde un principio
-> Reactividad Real (Signals)
-> NO utiliza el virtual DOM
-> Pero no hay trabajo

2- Nextjs - Genial para las personas que ya saben
-> Si necesitas CEO

3- Remix - SSR
-> SEO
-> Performance
-> Data Fetching
-> Routing
-> No hay trabajo

# Conceptos fundamentales en REACT

- React para hacer el cambio en el visual utiliza la comparativa de 2 DOM, el original con una copia del DOM o llamado (Virtual DOM)
- _commit:_ Es cuando detecta un cambio para renderizar. Es el proceso de aplicar cualquier cambio detectado en el DOM
- _trigger:_ Es un evento, ejemplo el click del botón

- Cuando esta extension .tsx le estas diciendo que hay lógica con html
- Cuando esta la extension .ts le estas diciendo que solo que hay es lógica de typescript
- El <StrictMode> es un componente que nos permite activar algunas comprobaciones de desarrollo en React. Por ejemplo, detecta componentes que se pueden renderizar de forma innecesaria o funcionalidades obsoletas que se están usando.

## Que es un componente

- Es la minima unidad de lógica posible y tiene solo que contener la lógica que le pertenece.

- Hay 2 tipos de componentes:
  -> Componente tonto: Es el que no se maneja la lógica, se utiliza para estilizar. Cuando no hay state.
  -> Componente inteligente: Es el que maneja la lógica donde se maneja los state

# Hooks

- Se identifican cuando empiezan por use
- Hay 2 tipos: los que están definido en react y los otros son los que se personalizan

## useState

- Controlar el ciclo de vida de un componente
- Se utiliza cuando se va hacer lógica al componente

### OJO

- No es lo mismo setCount(count+1) que setCount((count)=>count+1). De esta forma setCount((count)=>count+1) se ejecuta como método y se toma el valor del count que se pasa por parámetro de la arrow function. De la forma setCount(count+1) count es un valor devuelve el render cuando termine.

#### Ejemplo:

const [count, setCount]= useState(0);

# Batching

- EL Batching: Es cuando se ejecuta varios cambios de estados al mismo tiempo
  // El batching lo que hace es agrupar y después ejecuta

setCount(count+1); // 0+1
setCount(count+1); // 0+1
setCount(count+1); // 0+1
setCount(count+1); // 0+1
// El resultado de count es 1

setCount((count)=>count+1) // 0+1
setCount((count)=>count+1) // 1+1
setCount((count)=>count+1) // 2+1
setCount((count)=>count+1) // 3+1
// El resultado de count es 4

## useEffect

useEffect(()=>{

return () =>{} // El return se utiliza para manejar la memoria, ya que se puede destruir el componente y tener peticiones asíncronas consumiendo

},[])

### Cuando se tiene que usar el useEffect

- Comunicamos con un endpoint -> Entidades externas al componente
- Operaciones async
- Parámetros de entrada

### Cuando se ejecuta el useEffect

- Cuando se monta el componente
- Cada vez que se modifique uno de los valores del state que es pasado por el []

#### Ejemplo como se deberia plantear el useEffect

const [data, setData] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState("")

const fetchData = async () => {
setLoading(true)
try {
const response = await fetch("https://api.example.com/data")

      if (!response.ok) {
        throw new Error("Error al obtener datos")
      }

      const jsonData = await response.json()

      setData(jsonData)
    } catch (err) {
      setError(err as string)
    } finally {
      setLoading(false)
    }

}

// Hacemos el uso del Hook
// NO se pone data(jsonData) en [] porque creas un bucle al ejecutarse el useEffect después de activar el trigger del render setData()
useEffect(() => {
fetchData()
}, [])

if (loading) {
return <div>Cargando...</div>
}

if (error) {
return <div>UPS! Hay un error: {error}</div>
}

return (

<div>{JSON.stringify(data)}</div>
)
