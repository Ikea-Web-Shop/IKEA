import { Link } from "react-router-dom";
import {CustomBreadcrumbs} from "../../../Components"
// images
import BannerImage from "../../../Assets/Images/InternationalSales/a-collage-of-five-images-ai2001-01-ikea-l.jpg";
import ContentImage1 from "../../../Assets/Images/InternationalSales/a-man-setting-a-table-ai2001-02-PH156953-ikea-l.jpg";
import ContentImage2 from "../../../Assets/Images/InternationalSales/a-white-coloured-office-ai2001-03-PH165475-ikea-l.jpg";
import ContentImage3 from "../../../Assets/Images/InternationalSales/a-lively-cafe-ai2001-04-PH153819-ikea-l.jpg";
import ContentImage4 from "../../../Assets/Images/InternationalSales/a-lifestyle-store-display-ai2001-05-PH163516-ikea-l.jpg";
import ContentImage5 from "../../../Assets/Images/InternationalSales/a-woman-working-on-a-laptop-ai2001-06-PH163034-ikea-l.jpg";
function InternationalSales() {
  return (
    <div className="bg-white h-full">
      <CustomBreadcrumbs 
      link1="About IKEA"
      link2="Contact us"
      link3="How to buy IKEA products from a different country"
      route1="/about"
      route2="/contact"
      flag={true}
    />
      
      <div>
        <img src={BannerImage} alt="international salse" />
      </div>
      <div className="w-full flex justify-center mx-1 my-12">
        <div className="w-full sm:w-4/5 md:2/3 lg:w-1/2 px-4 sm:px-0 flex flex-col gap-7">
          <h1 className="text-3xl lg:text-5xl font-semibold  leading-10">
            No IKEA store where you are? We are here to help.
          </h1>
          <p className="text-lg lg:text-xl text-black tracking-wide leading-8">
            At IKEA we want to put well-designed, affordable home furnishing
            within reach of as many people as possible, and that includes people
            in countries without IKEA stores. From a craft coffee shop in New
            Zealand to your house in South Africa, our International Sales
            Department can help you furnish your business or your bedroom.
          </p>
          <div className="w-full sm:w-4/5 md:2/3 lg:w-8/12 self-center border-l-4 border-blue px-6 py-3">
            <h1 className="w-full text-3xl lg:text-4xl font-semibold leading-tight  lg:leading-10 tracking-wide">
              Order from our International Sales Department in 7 steps
            </h1>
            <ul className="mt-4">
              <li className="mb-2 text-base">
                <span className="mr-3">1.</span>
                <span>Eligibility</span>
              </li>
              <li className="mb-2 text-base">
                <span className="mr-3">2.</span>
                <span>Inspiration</span>
              </li>
              <li className="mb-2 text-base">
                <span className="mr-3">3.</span>
                <span>Shopping list</span>
              </li>
              <li className="mb-2 text-base">
                <span className="mr-3">4.</span>
                <span>Quote and timeline</span>
              </li>
              <li className="mb-2 text-base">
                <span className="mr-3">5.</span>
                <span>Customer form</span>
              </li>
              <li className="mb-2 text-base">
                <span className="mr-3">6.</span>
                <span>Confirmation and payment</span>
              </li>
              <li className="mb-2 text-base">
                <span className="mr-3">7.</span>
                <span>Enjoy!</span>
              </li>
            </ul>
          </div>
          <div>
            <img src={ContentImage1} alt="man setting a table" />
          </div>
          <h1 className="w-full text-3xl lg:text-4xl font-semibold leading-tight  lg:leading-10">
            How to buy IKEA products from a different country
          </h1>
          <p className="text-base text-black leading-6">
            Ordering IKEA furniture from abroad is not only easy, but also
            really safe, since we take full responsibility for the international
            delivery. Our International Sales Department in Delft, the
            Netherlands helps to furnish apartments, hotels, offices, schools,
            restaurants and houses all over the world. Whether you are in
            Colombia, Argentina or Algeria, we do our best to meet your bulk
            quantity needs. Follow the steps below or contact us to see if we
            can find solutions for you.
          </p>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl md:text-2xl font-bold">
              1. Check your eligibility
            </h2>
            <p className="text-base text-black leading-6 mb-4">
              Please note: The global shipping crisis is still affecting stock
              availability in many IKEA countries.
              <span className="font-bold">
                We only offer international shipping to countries with no IKEA
                stores
              </span>
              . If you live in a country where the IKEA business operates,
              please check your local ikea.com for information and updates about
              local stock availability.
            </p>
            <p className="text-base text-black leading-6">
              Send an email to our
              <a
                href="mailto: international.sales@inter.ikea.com"
                className="text-blue underline font-bold mx-1"
              >
                International Sales Department
              </a>
              with your location and estimated order size, and we’ll confirm if
              we are able to support your needs.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl md:text-2xl font-bold">2. Get inspired</h2>
            <p className="text-base text-black leading-6">
              Visit
              <a
                href="https://www.ikea.com/nl/en/"
                className="text-blue underline font-bold mx-1"
              >
                IKEA.nl/en
              </a>
              where you’ll find loads of inspirational products and ideas, or
              take a look at our business inspiration galleries below.
            </p>
            <img src={ContentImage2} alt="white colored coffee" />
            <h4 className="font-bold">An office space that works</h4>
            <p className="text-base text-black leading-6">
              Whether you need a space for creative brainstorming sessions,
              business presentations, answering emails or to chat with
              colleagues, IKEA helps you to create an office with a lot of
              possibilities. Businesses, start-ups, and even schools can order
              office furniture delivery to most countries in the world.
            </p>
            <a
              href="https://www.ikea.com/nl/en/ikea-business/office/"
              className="cursor-pointer hover:underline text-blue font-bold"
            >
              Office inspiration gallery
            </a>
            <img src={ContentImage3} alt="lively coffee" />
            <h4 className="font-bold">More than a coffee shop</h4>
            <p>
              Create a reason for customers to come back to your bistro, cafe or
              restaurant. Make it a place with a warm atmosphere and comfortable
              furniture to chat with friends or to dine with family. Let us help
              you furnish your space with seamless international delivery.
            </p>
            <a
              href="https://www.ikea.com/nl/en/ikea-business/hospitality/"
              className="cursor-pointer hover:underline text-blue font-bold"
            >
              Hospitality inspiration gallery
            </a>
            <img src={ContentImage4} alt="lifecycle store" />
            <h4 className="font-bold">Displays that dazzle</h4>
            <p>
              Present and show off clothing, home accessories, flowers, or
              anything else you’re selling in an inspiring way by ordering IKEA
              products from abroad. With a variety of clothing racks, wall racks
              and wall shelves, we can help you create practical and alluring
              displays.
            </p>
            <a
              href="https://www.ikea.com/nl/en/ikea-business/retail/"
              className="cursor-pointer hover:underline text-blue font-bold"
            >
              Retail inspiration gallery
            </a>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl md:text-2xl font-bold">
              3. Choose your products
            </h2>
            <p>
              All the products shown on IKEA.nl can be ordered.
              <a
                href="https://www.ikea.com/nl/en/profile/signup/family/"
                className="cursor-pointer underline text-blue font-bold mx-1"
              >
                Create an IKEA family account
              </a>
              and then make a shopping list. Once you are done, confirm your
              <a
                href="https://order.ikea.com/nl/en/checkout/shoppinglist/?_ga=2.3299760.1219938909.1589983707-666146122.1589983707"
                className="cursor-pointer underline text-blue font-bold mx-1"
              >
                shopping list
              </a>
              by sending your account details to our
              <a
                href="mailto: international.sales@inter.ikea.com"
                className="cursor-pointer underline text-blue font-bold mx-1"
              >
                International Sales Department
              </a>
              . We will then be able to retrieve all the items that you have
              saved in your shopping list. Make sure to review
              <a
                href="https://gbl-sc9u2-prd-cdn.azureedge.net/-/media/aboutikea/pdfs/english-translation-of-warranty-per-product-dutch-catalogue-2021.pdf?rev=faad8211322446669876e76459697032&hash=1280661E3E5DF8166603BD20B9F1ACE5"
                className="cursor-pointer underline text-blue font-bold mx-1"
              >
                the warranty (PDF, 58KB)
              </a>
              before completing your order.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl md:text-2xl font-bold">
              4. Receive your shipping quote and timeline
            </h2>
            <p>
              We will then provide you with a quote for a 20\40 ft. container
              (one or more) from the Netherlands to the destination port. If you
              choose to use the services of one of our shipping partners, the
              costs will be added to your shopping list. Please look at our
              <a
                href="https://gbl-sc9u2-prd-cdn.azureedge.net/-/media/aboutikea/pdfs/gtc-international-sales_november--2020.pdf?rev=e882b4ccb0d24182a8f8d3fd4862b7a8&hash=55A2122E32835345CC8505500C611AE1"
                className="cursor-pointer underline text-blue font-bold mx-1"
              >
                Terms and conditions (PDF, 0.8MB)
              </a>
              .
            </p>
            <img src={ContentImage5} alt="woman working" />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl md:text-2xl font-bold">
              5. Fill out the customer form
            </h2>
            <p>
              Once you’ve received and decided on your quote, a customer form
              will be sent to you. This includes all practical details that will
              allow us to move forward with your order.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl md:text-2xl font-bold">
              6. Confirm and pay
            </h2>
            <p>
              Before we process your order, we will need your final OK for
              everything including the products, shipping costs and our terms
              and conditions. Once you’ve paid, your products will be picked,
              loaded and shipped to your port of choice.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl md:text-2xl font-bold">
              7. Enjoy your products
            </h2>
            <p>
              They’ve finally arrived. Now all that is left to do is to have fun
              with your new furniture. Let us know how the experience has been
              for you and send us photos – we’d love to see the end result. If
              you have any feedback, feel free to
              <a
                href="mailto: international.sales@inter.ikea.com"
                className="cursor-pointer underline text-blue font-bold mx-1"
              >
                contact our team
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternationalSales;
