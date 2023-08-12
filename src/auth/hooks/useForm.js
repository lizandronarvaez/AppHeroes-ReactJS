import { useState } from "react";

const useForm = (dataInitial = {}) => {

    const [formData, setFormData] = useState(dataInitial)
    
    const handleInputChange = ({ target }) => {
        const { name, value } = target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    return {
        ...formData,
        formData,
        handleInputChange,
        setFormData
    }
}


export default useForm