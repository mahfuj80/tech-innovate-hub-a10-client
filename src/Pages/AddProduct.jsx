import Swal from 'sweetalert2';

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form?.image?.value;
    const name = form?.name?.value;
    const brandName = form.brandName.value;
    const type = form?.type?.value;
    const price = form?.price?.value;
    const description = form?.description?.value;
    const rating = form?.rating?.value;
    const productInfo = {
      name,
      description,
      image,
      brandName,
      type,
      price,
      rating,
    };
    const brandNames = brandName.toLowerCase();
    if (
      brandNames !== 'apple' &&
      brandNames !== 'google' &&
      brandNames !== 'asus' &&
      brandNames !== 'intel' &&
      brandNames !== 'samsung' &&
      brandNames !== 'sony'
    ) {
      return Swal.fire({
        title: 'Error!',
        text: 'Brand Name Is Incorrect!!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
    fetch(
      'https://tech-innovate-hub-a10-server-16flih61x.vercel.app/products',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(productInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: 'Success!',
            text: 'Product Successfully Added',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
        }
      });
  };
  return (
    <div>
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-gray-100">
        <div className="container mx-auto">
          <p className="text-4xl text-center font-bold mb-16">
            Add Your Product
          </p>
          <form
            onSubmit={handleAddProduct}
            className="-mx-4 flex flex-wrap px-6"
          >
            <div className="w-full px-4 md:w-1/2 lg:w-1/2">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-black">
                  Product Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Please Enter Product Name Here..."
                  className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/2">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-black">
                  Brand Name
                </label>
                <input
                  required
                  name="brandName"
                  type="text"
                  placeholder="Please Enter Brand Name Here"
                  className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/2">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-black">
                  Price
                </label>
                <input
                  required
                  name="price"
                  type="text"
                  placeholder="Please Enter Product Price here.."
                  className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/2">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-black">
                  Rating
                </label>
                <input
                  required
                  name="rating"
                  type="text"
                  placeholder="Enter Product Rating"
                  className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/2">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-black">
                  Type
                </label>
                <input
                  required
                  name="type"
                  type="text"
                  placeholder="Product Type eg: phone, computer, headphone, etc"
                  className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/2">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-black">
                  Short Description
                </label>
                <textarea
                  name="description"
                  type="text"
                  placeholder="Enter Short Description Here.."
                  className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/1 lg:w-1/1">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-black">
                  Image
                </label>
                <input
                  required
                  name="image"
                  type="text"
                  placeholder="Image URL..."
                  className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
            </div>
            <div className=" mx-auto px-4 w-4/5 md:w-2/3 lg:w-2/3 ">
              <div className="mb-12">
                <input
                  required
                  type="submit"
                  className="w-full cursor-pointer hover:bg-slate-400 bg-slate-300 rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
