import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";

const Hidden = () => {
  const { user,  isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    
      <div>
        
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <form>
          <h1>Enter your purchase.</h1>
          <div>
            <div>
              <input type="number" name="value"/>
            </div>
          </div>

          <div>
            <div>
                <div>
                  <p></p>
                </div>
            </div>
          </div>

          <div>
            <input type="submit" value="Submit"/>
          </div>
          
        </form>
      </div>
    
  );
};

export default withAuthenticationRequired(Hidden, {onRedirecting: () => <Loading/>, returnTo : window.location.pathname});