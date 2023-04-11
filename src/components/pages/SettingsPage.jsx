import React, { useState } from "react";
import formStyleClasses from "styles/forms";
import { withFormik, Form, Field } from "formik";
import { Link } from 'react-router-dom';
import { useAuth } from "hooks/authentication";
import trashIcon from 'assets/ui/carbon_trash-can.svg';
// import trashIconDark from 'assets/ui/carbon_trash-can_dark_mode.svg';
import DeleteModal from 'components/elements/DeleteAccountModal'
// import * as Yup from "yup";
// import { ToastContainer, toast } from "react-toastify";


function SettingsPageFormComponent({ errors, touched }) {
 
   
  const clickChangeEmail = () => {
    window.alert('*Note: To edit your email address, we recommend deleting your account and creating a new account. ')
  };


  return (
    <Form>
   
      <div className="w-1/2 grid grid-rows-2 md:grid-cols-1 md:grid-rows-2">
        <label className="col-span-3 pt-8 text-left text-lg" htmlFor="email">
          Email address
          {touched.email && errors.email && (
            <span className="px-2 inline-block text-[#FB2F2F] dark:text-[#FB2F2F] text-sm">
              {errors.email}
            </span>
          )}
        </label>
        <Field type="email" name="email" className={formStyleClasses.input2} />
        <a className=" col-span-3 pt-8 ml-48 text-right underline underline-offset-4 text-lg dark:text-white" onClick = {clickChangeEmail}>
       

          Edit Email Address
          
        </a>
        {/* {this.state.showMessage && <p>  *Note: To edit your email address, we recommend deleting your account and creating a new account. </p>} */}
      </div>
    </Form>
  );
  
}
export function mapPropsToValues(props) {
  return {
    email: props.email || "",
  };
}
export function handleSubmit(values, { props }) {
  props.handleSubmit(values);
}

export const SettingsPageForm = withFormik({
  mapPropsToValues,
  handleSubmit,
})(SettingsPageFormComponent);

function SettingsPage() {

  const auth = useAuth()
  const signOut = () => auth.signOutCurrentUser();

  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false)

  const clickDelete = () => {
    setModalOn(true)
  }

  return (
    <>
      <div className="xs:mb-40 lg:mt-12 lg:mx-28 xl:mx-40">
        <div className="container mx-auto text-center">
          <h2 className="font-bold text-lg md:pt-12 lg:text-4xl lg:pb-3 text-left lg:text-center"></h2>
         
        </div>
        <p className="pt-4 text-red-700 text-center">{}</p>
        <SettingsPageForm handleSubmit={handleSubmit} />
      </div>
      <div>
        <div className="flex text-left mt-32 ml-24 ">
          {auth.currentUser.isAuthenticated && (
            <Link
              className="block underline underline-offset-4 text-lg p-8 dark:text-white"
              to="/sign-in"
              onClick={signOut}
            >
               Sign Out
            </Link>
          )}

          
          <img src={trashIcon} alt="logo" />
          {/* add event listener for pop up confirmation*/}
          <Link
            className="block  text-lg pt-8 dark:text-white"
            to={``}
            onClick={clickDelete}
          >
   
             Delete Account
          </Link>
        </div>
      </div>
      <div>
        {modalOn && (
          <DeleteModal setModalOn={setModalOn} setChoice={setChoice} />
        )}
      </div>
    </> 
  );
          
}

export default SettingsPage;
