const JsxCrashCourse = () => {
  const username = "John Doe";
  const firstNum = 4;
  const secondNum = 10;

  const names = ['Mason', 'Julie', 'Brad', 'John', 'Sarah'];

  const loggedIn = true;
  
  const styles = {
    color: '#6e7f80',
    fontSize: '28px',
    border: '2px dashed green',
    margin: '30px 0 150px 0',
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-5 underline">Chapitre 1 : JSX</h1>

      <div className="text-2xl font-bold italic text-sky-700 ml-4">App</div>

      {/* Je peux implémenter les variables déclarées en JS dans la partie HTML du code (tout ce qui se trouve dans return) */}
      <p>Hello {username} !</p>
      <p>L'addition de {firstNum} et {secondNum} est égale à : {firstNum + secondNum}.</p>

      <ul>
        {/* J'insère du JS pur (vanilla js) avec des accolades */}
        {names.map((name, index) => ( /* J'utilise la fonction map pour parcourir le tableau names */
          <li key={index}>{index}. {name}</li> /* Puis j'utilise un élément li qui va contenir l'élément parcouru lors du tour de boucle */
          /*
            Je dois toujours utiliser la clé index lorsque je parcours une liste, cela permet à React d'identifier les éléments
            et de bien gérer les différents changements d'états des éléments (suppression, ajout, modification...).
          */
        ))}
      </ul>

      {/* Opération ternaire, équivalent de : 
            if(loggedIn) {
              return <h1 className="text-green-700">You are logged in !</h1>
            } else {
              return <h1>Please log in.</h1>
            }
      */}
      {loggedIn ? <h1 className="text-green-700">You are logged in !</h1> : <h1>Please log in.</h1>}

      {/* Je peux utiliser un fichier CSS, TailwindCSS et autres, mais je peux aussi implémenter le style directement dans les éléments */}
      <p style={{ color: '#663399', fontSize: '20px', textTransform: 'uppercase', fontWeight: 'bold', fontStyle: 'italic', marginTop: '30px' }}>Du style déclaré dans un élément du fichier JSX.</p>
    
      {/* Je peux aussi utiliser du style déclaré dans une variable de type objet contenant du style */}
      <p style={styles}>Du style implémenté avec une variable de type objet.</p>
    </>
  )
}

export default JsxCrashCourse