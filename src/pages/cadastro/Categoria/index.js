import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormeField'
import Button from '../../../components/Button'


function CadastroCategoria(){
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

  function handleChange(event){
    // const { getAttribute, value } = event.target
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    )
  }

   return(
     <PageDefault>
       <h1>Cadastrar categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(event){
         event.preventDefault()
         setCategorias([...categorias, values
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

         <FormField
         as="textarea"
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

         <Button>
           Cadastrar
         </Button>

      </form>

          <ul>

            {categorias.map((categoria) => {
              return(
                <li key={`${categoria.nome}`}> 
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

 export default CadastroCategoria