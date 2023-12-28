import './Form.css';

function Form() {
  return (
    <div className='container'>
          <div className="Form">
              <form action="action_page.php" method="post">
        <div class="imgcontainer">
          <img src="https://kajasoruban.github.io/Assignment02_Kajasoruban-V2/Assets/images/sankar1.JPG" alt="Avatar" class="avatar"/>
        </div>

        
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required/>

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember"/> Remember me
          </label>
        

        <div class="container2">
          <button type="button" class="cancelbtn">Cancel</button>
          <span classN="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
                            
      </div>
    </div>
  );
}

export default Form;