import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader, DropDown } from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '', 
    deadline: '',
    image: '',
    category: ''
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if(exists) {
        setIsLoading(true)
        await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18)})
        setIsLoading(false);
        navigate('/');
      } else {
        alert('Provide valid image URL')
        setForm({ ...form, image: '' });
      }
    })
  }

  return (
    <div className="bg-[#081c2c] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#25689e] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Start a Campaign</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
          <FormField 
            labelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
        </div>

        <FormField 
            labelName="Story *"
            placeholder="Write your story"
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormFieldChange('description', e)}
          />

        <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
          <img src={money} alt="money" className="w-[40px] h-[40px] object-contain"/>
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">You will get 100% of the raised amount</h4>
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
          <FormField 
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange('deadline', e)}
          />
        </div>

        <div className="flex flex-wrap gap-[40px]">
        <label className="flex-1 w-full flex flex-col">
  <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
    Category*
  </span>
  
 <select 
  value={form.category} 
  onChange={(e) => handleFormFieldChange('category', e)}
  className="py-3 px-4 outline-none border-2 border-gray-300 bg-[#081c2c] text-[#808191] rounded-md min-w-[300px]"
  required
>
  <option value="" className="bg-gray-800 text-white py-2 px-4">Select category</option>
  <option value="Education and Learning" className="bg-gray-800 text-white py-2 px-4">Education and Learning</option>
  <option value="Environmental Causes" className="bg-gray-800 text-white py-2 px-4">Environmental Causes</option>
  <option value="Health and Medical Expenses" className="bg-gray-800 text-white py-2 px-4">Health and Medical Expenses</option>
  <option value="Humanitarian Aid and Disaster Relief" className="bg-gray-800 text-white py-2 px-4">Humanitarian Aid and Disaster Relief</option>
  <option value="Personal and Family Emergencies" className="bg-gray-800 text-white py-2 px-4">Personal and Family Emergencies</option>
  <option value="Social Causes and Activism" className="bg-gray-800 text-white py-2 px-4">Social Causes and Activism</option>
  <option value="Technology and Innovation" className="bg-gray-800 text-white py-2 px-4">Technology and Innovation</option>
  <option value="Wildlife and Animal Conservation" className="bg-gray-800 text-white py-2 px-4">Wildlife and Animal Conservation</option>
  <option value="Others" className="bg-gray-800 text-white py-2 px-4">Others</option>
</select>

</label>



        <FormField 
            labelName="Campaign image *"
            placeholder="Place image URL of your campaign"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
          />
          
        </div>

          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton 
              btnType="submit"
              title="Submit new campaign"
              styles="bg-[#25689e]"
            />
          </div>
      </form>
    </div>
  )
}

export default CreateCampaign