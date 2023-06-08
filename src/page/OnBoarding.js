import {useState} from "react";
import Nav from "../components/Nav";

const OnBoarding = () => {

    const [formData,setFormData] = useState({
        user_id:'',
        first_name:'',
        dob_day:'',
        dob_month:'',
        dob_year:'',
        show_gender:false,
        gender_identity:'man',
        gender_interest:'woman',
        email:'',
        url:'',
        about:'',
        matches:[]
    })

    const handleSubmit = () => {
        console.log("submit")
    };

    const handleChange = (e) => {
        console.log('e',e)
        const value = e.target.value
        const name = e.target.name

        console.log('value'+value,'name'+name)

        setFormData((prevState) =>({
            ...prevState,
            [name]: value
        }))

    };


    return (
        <>
            <div className="onboarding">
                <h2>CREATE ACCOUNT</h2>
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}/>

                        <label>Birthday</label>
                        <div className="multiple-input-container">
                            <input
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder="DD"
                                required={true}
                                value={formData.dob_day}
                                onChange={handleChange}/>
                            <input
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder="MM"
                                required={true}
                                value={formData.dob_month}
                                onChange={handleChange}/>
                            <input
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="YYYY"
                                required={true}
                                value={formData.dob_year}
                                onChange={handleChange}/>
                        </div>

                        <label>Gender</label>
                        <div className="multiple-input-container">
                            <input
                                id="man-gender-identify"
                                type="radio"
                                name="gender_identify"
                                value="man"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="man-gender-identify">Man</label>

                            <input
                                id="woman-gender-identify"
                                type="radio"
                                name="gender_identify"
                                value="woman"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="woman-gender-identify">Woman</label>

                            <input
                                id="more-gender-identify"
                                type="radio"
                                name="gender_identify"
                                value="more"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="more-gender-identify">More</label>

                        </div>

                        <label htmlFor="show-gender">Show gender on my profile</label>
                        <input
                            id="show-gender"
                            type="checkbox"
                            name="show-gender"
                            value="moder"
                            onChange={handleChange}
                            checked={false}
                        />

                        <label>Show Me</label>
                        <div className="multiple-input-container">
                            <input
                                id="man-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="man"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="man-gender-interest">Man</label>

                            <input
                                id="woman-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="woman"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="woman-gender-interest">Woman</label>

                            <input
                                id="everyone-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="everyone"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="more-gender-interest">Everyone</label>

                        </div>

                        <label htmlFor="about">About Me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            placeholder=""
                            required={true}
                            value={formData.about}
                            onChange={handleChange}/>

                        <input type="submit"/>
                    </section>

                    <section>
                        <label htmlFor="url">Profile</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />

                        <div className="photo-container">

                            <img src={formData.url} alt="Profile Pic Preview"/>
                        </div>
                    </section>
                </form>
            </div>
        </>
    )
}
export default OnBoarding

