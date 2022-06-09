import React from 'react';
import resome from './PH-resome (Autosaved).pdf'
import {FaPhone} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <div className="bg-cyan-900 pt-10">
                <h1 className='text-center mb-10 text-3xl md:text-5xl uppercase font-bold text-white'>contact me</h1>
                <div className="grid grid-cols-1 gap-3 md:gap-5 text-white sm:grid-cols-2 px-2 sm:px-4 md:px-8 lg:px-16">
                    <div className="border rounded-xl shadow-box p-2 md:p-4" data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="800">
                        <h1 className='text-xl font-bold'>Contact information</h1>
                        <div className="text-white">
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a sint incidunt. expedita fugit labore omnis!</p>
                            <div className="">
                                <div className='cursor-pointer my-2 flex items-center'><FaPhone />  <a className='font-bold ml-2 text-white block' href='tel:01831294559'>+01831294559</a></div>
                            </div>
                            <div className="">
                                <div className='cursor-pointer my-2 flex items-center'><SiGmail /> <a className='font-bold ml-2 text-white' href='mailto:rohulamin@gmail.com'>rohulamin@gmail.com</a></div>
                            </div>
                        </div>
                        <div className="">
                            <button className='btn md:text-xl btn-sm md:btn-md btn-circle btn-secondary border-2 border-accent text-cyan-900 font-bold'><FiFacebook /></button>
                            <button className='btn md:text-xl btn-sm md:btn-md btn-circle mx-2 btn-secondary border-2 border-accent text-cyan-900 font-bold'><AiOutlineTwitter /></button>
                            <button className='btn md:text-xl btn-sm md:btn-md btn-circle btn-secondary border-2 border-accent text-cyan-900 font-bold'><BsInstagram /></button>
                            <button className='btn md:text-xl btn-sm md:btn-md btn-circle mx-2 btn-secondary border-2 border-accent text-cyan-900 font-bold'><FaPhone /></button>
                        </div>
                        <div className="mt-5">
                        <a href={resome} download>
                            <button class="btn btn-secondary text-white md:btn-md btn-sm"  data-aos="zoom-in-right" data-aos-delay="700" data-aos-duration="800">Download Resume</button>
                        </a>
                        </div>
                    </div>
                    <div className="border rounded-xl p-5 text-white" data-aos="zoom-in-left" data-aos-delay="100" data-aos-duration="1000">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex justify-between">
                                <div className="form-control w-[48%] max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-white font-bold">Phone Number</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder="Phone Number" 
                                        className="input text-cyan-900 border rounded-md input-bordered w-full max-w-xs" 
                                        {...register("phone", {
                                            required: {
                                                value: true,
                                                message: 'Phone Number is required'  
                                            },
                                            pattern: {
                                                value: /^(?:\+88|01)?\d{11}\r?$/,
                                                message: 'Invalid Number'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                    {errors.phone?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-[48%] max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-white font-bold">Your Email</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder="Your Email" 
                                        className="input border text-cyan-900 rounded-md input-bordered w-full max-w-xs" 
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Your Email is required'  
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'provide a valid email..'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>
                            </div>
                            <div className="form-control w-full">
                                <label className="label text-white">
                                    <span className="label-text text-white">Massage</span>
                                </label>
                                <textarea 
                                placeholder="massage" 
                                className="textarea text-cyan-900 textarea-bordere w-full" 
                                {...register("description", {
                                    required: {
                                    value: true,
                                    message: 'Description is required'  
                                    },
                                    minLength: {
                                    value: 4,
                                    message: 'Must be 30 characters longer'
                                    }
                                })}
                                ></textarea>
                            <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            {errors.description?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                            </div>
                        <input className='btn w-full uppercase font-bold' type="submit" value="Login"  />
                        </form>
                    </div>
                </div>
                <div>
                    <p className='text-center text-white py-4'>Copyright 2022 All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;