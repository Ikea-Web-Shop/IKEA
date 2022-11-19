import images from 'src/Importer/Importer';
import {CustomBreadcrumbs} from "../../../Components"

function LifeAtHome() {
	return (
		<>
			 <CustomBreadcrumbs 
      link1="About IKEA"
      link2="Life at home"
      link3=""
      route1="/about"
      route2="/life-at-home"
      flag={false}
    />
	<div className='w-full pt-32'>
			<div className='m-auto w-full xl:w-2/3 mb-12 p-4 xl:p-0'>
				<h1 className='text-4xl sm:text-5xl font-bold mb-6'>
					Creating a better life at home
				</h1>
				<p className='w-full sm:w-10/12 lg:text-xl text-2xl'>
					If there’s one thing we’ve learnt over the past 75+ years, it’s that a
					better home creates a better life. So we work to create better homes,
					every day, through the products and solutions we offer.
				</p>
			</div>
			<div className='flex flex-col sm:flex-row w-full p-4 xl:w-7/12 m-auto mt-24 mb-44'>
				<div className='w-full sm:w-1/2 sm:mr-12 mb-16 sm:mb-0'>
					<img
						className='flex w-full'
						src={
							images['LifeAtHome/a-woman-in-a-room-ai05-01-PH161124-ikea-l.jpg']
						}
						alt=''
					/>
				</div>

				<div className='w-full sm:w-1/2 sm:ml-12'>
					<h2 className='lg:text-xl text-2xl sm:text-4xl	font-bold mb-6'>
						Our curiosity box
					</h2>
					<p className='mb-6 lg:text-xl text-2xl'>
						To create better homes, we need to know the challenges people are
						facing in their everyday lives. The world is changing, faster than
						ever before, and so are people’s needs and dreams.
					</p>
					<a
						href='https://about.ikea.com/en/life-at-home/curiosity-box'
						className='text-blue lg:text-xl text-2xl font-semibold'>
						See how we are keeping up with life at home
					</a>
				</div>
			</div>
			<div className='mb-12 bg-gray w-full py-16'>
				<div className='m-auto w-full sm:w-7/12 mb-12 p-4 sm:p-0'>
					<h1 className='text-3xl xl:text-5xl	font-bold mb-12'>Did you know?</h1>
					<p className='lg:text-xl text-2xl xl:text-4xl mb-16 '>
						Every year since 2014 we’ve been connecting with people around the
						world to create our Life at Home Report.
					</p>
					<p className='lg:text-xl text-2xl xl:text-4xl mb-8'>
						So far, we’ve spoken to 105 738 of them.
					</p>
					<a
						href='https://lifeathome.ikea.com/'
						className='text-blue text-lg font-semibold	'>
						See how we are keeping up with life at home
					</a>
				</div>
			</div>
			<div className='flex flex-col sm:flex-row w-full p-4 xl:w-7/12 m-auto mt-24 mb-44'>
				<div className='w-full sm:w-1/2 sm:mr-12 mb-16 sm:mb-0'>
					<img
						className='flex w-full'
						src={
							images[
								'LifeAtHome/smart-symfonisk-lamp-ai05-03-PE820515-ikea-l-a3c9b31d-figure-image-desktop.png'
							]
						}
						alt=''
					/>
				</div>

				<div className='w-full sm:w-1/2 sm:ml-12'>
					<h2 className='lg:text-xl text-2xl sm:text-4xl	font-bold mb-6'>How we work</h2>
					<p className='mb-6 lg:text-xl text-2xl'>
						Finding the smartest, most innovative, cost-efficient way of doing
						things is part of our DNA. We’ve always gone our own way, knowing
						that you can’t blaze a trail by walking the same path as everyone
						else.
					</p>
					<a
						href='https://gbl-sc9u2-prd-cdn.azureedge.net/-/media/aboutikea/images/life-at-home/smart-symfonisk-lamp-ai05-03-pe820515-ikea-l-a3c9b31d/smart-symfonisk-lamp-ai05-03-pe820515-ikea-l-a3c9b31d-figure-image-mobile?rev=dff9b89ae40f47d5903dfe5a40f7a311'
						className='text-blue text-lg font-semibold'>
						Find out how we create safer, smarter, more beautiful homes
					</a>
				</div>
			</div>
			<div className='flex flex-col sm:flex-row w-full p-4 xl:w-7/12 m-auto mt-24 mb-44'>
				<div className='w-full sm:w-1/2 sm:mr-12 mb-16 sm:mb-0'>
					<img
						className='flex w-full'
						src={
							images[
								'LifeAtHome/young-woman-leaning-on-desk-holding-take-away-food-ai05-PH161073-ikea-c8a466b5-figure-image-desktop.png'
							]
						}
						alt=''
					/>
				</div>

				<div className='w-full sm:w-1/2 sm:ml-12'>
					<h2 className='lg:text-xl text-2xl sm:text-4xl	font-bold mb-6'>
						Co-creation - working with you to make better things
					</h2>
					<p className='mb-6 lg:text-xl text-2xl'>
						We believe that the best things are those we create together.
						Through co-creation, we invite you to share your ideas and feedback
						with us.
					</p>
					<a
						href='https://about.ikea.com/en/life-at-home/co-creation'
						className='text-blue text-lg font-semibold'>
						Learn more and share your idea
					</a>
				</div>
			</div>
			<div className=' mb-56 bg-gray w-full py-16 '>
				<div className='m-auto w-10/12 lg:w-7/12 mb-12  flex flex-col sm:flex-row justify-end relative'>
					<div className='w-full sm:w-1/2 sm:pr-8 xl:pr-20 sm:absolute left-0 top-0  '>
						<img
							src={
								images[
									'LifeAtHome/sarah-fager-senior-designer-ikea-of-sweden-ai010301-ikea-s.jpg'
								]
							}
							alt=''
							className='w-full'
						/>
						<div className='p-6 bg-gray '>
							<h2 className='text-2xl	font-bold mb-6'>
								Democratic Design. Making great design available to everyone.
							</h2>
							<p className="lg:text-xl text-2xl">
								The five dimensions of Democratic Design are at the heart of our
								products. Find out what they are and how we use them.
							</p>
							<button className='bg-black w-10 h-10 rounded-full flex items-center justify-center mt-12'>
								<svg className='fill-white w-6 h-6' viewBox='0 0 24 24'>
									<path d='M19.2937 12.7074L20.0008 12.0003L19.2938 11.2932L12.0008 3.99927L10.5865 5.41339L16.1727 11.0003H4V13.0003H16.1723L10.5855 18.5868L11.9996 20.0011L19.2937 12.7074Z'></path>
								</svg>
							</button>
						</div>
					</div>
					<div className='w-full sm:w-1/2 sm:pl-8 xl:pl-20 mt-6 sm:mt-0 mb-64'>
						<img
							className='w-full'
							src='https://gbl-sc9u2-prd-cdn.azureedge.net/-/media/aboutikea/images/life-at-home/five-democratic-design-principles-ai05-04-px104231-ikea-l.jpg?rev=e178460d10c54b7d8fc61384f0e083e2'
							alt=''
						/>
						<p className='text-gray-600  lg:text-xl text-2xl mt-2'>
							The five dimensions of Democratic Design.
						</p>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default LifeAtHome;
