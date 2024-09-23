import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState<any>(null); // Updated to any for better flexibility
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (router.isReady && id) {
            fetch(`/api/products/${id}`)
                .then(response => response.json())
                .then(data => {
                    if (data.message) {
                        setProduct(null);
                    } else {
                        setProduct(data);
                    }
                })
                .catch(error => {
                    console.error('Error fetching product:', error);
                    setProduct(null);
                })
                .finally(() => setLoading(false));
        }
    }, [router.isReady, id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found!</div>;
    }

    const generateRating = (rating: number) => {
        const totalStars = 5;
        return (
            <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                {Array.from({ length: totalStars }, (_, index) => (
                    index < rating ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />
                ))}
            </div>
        );
    };

    return (
        <div className='container mx-auto pt-16'>
            <div className='flex flex-col md:flex-row'>
                {/* Product Image */}
                <div className='w-full md:w-1/2'>
                    <Image
                        src={product.img}
                        alt={product.title}
                        width={400}
                        height={500}
                        className='w-full h-auto'
                    />
                </div>

                {/* Product Details */}
                <div className='w-full md:w-1/2 pl-8 space-y-4'>
                    <h1 className='text-3xl font-bold'>{product.title}</h1>
                    <p className='text-gray-500'>{product.desc}</p>
                    <div className='text-xl font-semibold'>Price: RS. {product.price}</div>
                    <p className='text-red-500'>{product.off}</p>

                    {/* Rating and Sold Information */}
                    <div className='flex gap-2 items-center'>
                        {generateRating(product.rating)}
                        <span className='text-gray-600'>({product.sold} {product.sign})</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
