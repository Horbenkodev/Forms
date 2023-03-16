function inputSection(props) {
  return
  <div class={props}>
    <label for={props}>{props}</label>
    <input name={props} id={props} type={props}/>
  </div>
}

function submitButton(props) {
  return
  <input class={props} type='submit' value={props} />
}