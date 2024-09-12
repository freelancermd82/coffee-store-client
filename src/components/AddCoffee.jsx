import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {


    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                title: 'Success!',
                text: 'coffee Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
    }




    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h1>Add a Coffee</h1>
            <form onSubmit={handleAddCoffee}>
                {/* name and quantity row */}
                <div className='md:flex mb-8 gap-2'>

                    <div className='form-control md: w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Coffee Name</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='name' placeholder="Coffee Name"
                                className='w-full'
                            />
                        </label>
                    </div>
                    <div className='form-control md: w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Available Quantity</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='quantity' placeholder="Available Quantity"
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
                            <input type="text" name='supplier' placeholder="Supplier Name"
                                className='w-full'
                            />
                        </label>
                    </div>
                    <div className='form-control md: w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Taste</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='taste' placeholder="taste"
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
                            <input type="text" name='category' placeholder="Category"
                                className='w-full'
                            />
                        </label>
                    </div>
                    <div className='form-control md: w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Details</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='details' placeholder="category details"
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
                            <input type="text" name='photo' placeholder="Photo url"
                                className='w-full'
                            />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className='btn btn-block bg-[#D2B48C]' />
            </form>
        </div>
    );
};

export default AddCoffee;