import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;


    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updatedCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'coffee updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }


    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h1>Update Coffee: {name}</h1>
            <form onSubmit={handleUpdateCoffee}>
                {/* name and quantity row */}
                <div className='md:flex mb-8 gap-2'>

                    <div className='form-control md: w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Coffee Name</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='name' defaultValue={name} placeholder="Coffee Name"
                                className='w-full'
                            />
                        </label>
                    </div>
                    <div className='form-control md: w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Available Quantity</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='quantity' defaultValue={quantity} placeholder="Available Quantity"
                                className=' w-full'
                            />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className='md:flex mb-8 gap-2'>

                    <div className='form-control md: w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Supplier Name</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='supplier' defaultValue={supplier} placeholder="Supplier Name"
                                className='w-full'
                            />
                        </label>
                    </div>
                    <div className='form-control md: w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Taste</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='taste' defaultValue={taste} placeholder="taste"
                                className=' w-full'
                            />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className='md:flex mb-8 gap-2'>

                    <div className='form-control md: w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Category </span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='category' defaultValue={category} placeholder="Category"
                                className='w-full'
                            />
                        </label>
                    </div>
                    <div className='form-control md: w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Details</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='details' defaultValue={details} placeholder="category details"
                                className=' w-full'
                            />
                        </label>
                    </div>
                </div>
                {/* form photo url row row */}
                <div className='mb-8'>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Photo url </span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='photo' defaultValue={photo} placeholder="Photo url"
                                className='w-full'
                            />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Coffee" className='btn btn-block bg-[#D2B48C]' />
            </form>
        </div>
    );
};

export default UpdateCoffee;