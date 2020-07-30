import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormeField'


function Cadastrocategoria(){
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }
  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais)


  function setValue(chave, valor){
    //chave: nome, descrição, bla bla, etc
    setValues({
      ...values,
    [chave]: valor //Nome: 'valor
    })
  }

  function handleChange(infosDoEvento){
    // const { getAttribute, value } = infosDoEvento.target
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    )
  }

   return(
     <PageDefault>
       <h1>Cadastrar categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
         infosDoEvento.preventDefault()
         setCategorias([
          ...categorias,
          values
         ])

         setValues(valoresIniciais)
       }}>

         {/* State */}

       <FormField
        label = "Nome da Categoria"
        type = "text"
        name='nome'
        value = {values.nome}
        onChange = { handleChange }
       />

        {/* <div>
          <label>
            Descrição: 
            <textarea 
            type="text"
            value={values.descricao}
            name='descricao'
            onChange = { handleChange }
            />
          </label>
         </div> */}

         <FormField
         label = "Descrição"
         type = "textarea"
         name='descricao'
         value = {values.descricao}
         onChange = { handleChange }
        />

        <FormField
        label = "Cor"
          type = "color"
          name='cor'
          value = {values.cor}
          onChange = { handleChange }
        />

         <button>
           Cadastrar
         </button>

      </form>

          <ul>

            {categorias.map((categoria, indice) => {
              return(
                <li key={`${categoria} ${indice}`}> 
                  {categoria.nome}
                </li>
              )
            })}

          </ul>

       <Link to="/">
         Ir para home
       </Link>
     </PageDefault>
   )
 }

 export default Cadastrocategoria