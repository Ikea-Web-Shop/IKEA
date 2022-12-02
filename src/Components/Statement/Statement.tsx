
import SimpleText from "../SimpleText/SimpleText";
import PrivacyList from "./PrivacyList/PrivacyList";
function Statement (){
    return(
<>
<div className="container">
<div>
<p className="font-bold mt-12  text-5xl">Thanks for sharing!</p>
<p className="block mt-12">Updated 10 September 2020 </p>
<p className="block mt-4 font-bold">Thanks for sharing! </p>
<p className="block mt-1 mb-5">The IKEA vision is to create a better everyday life for the many people. That’s a big job, and one we at Inter IKEA Systems B.V. take seriously.  </p>

 <SimpleText text="Who are the many people? You are! Whether you’re an IKEA customer, co-worker or business partner, the IKEA vision is all about you. So naturally we want to get to know you better."/>
 <SimpleText text="One way we do that is by collecting your personal information. If you’re reading this, you’re probably curious what information we collect and how we use it. Read on to find out."/>

 
 <SimpleText text="Without your information, our job would be a lot harder. So thanks for sharing! We hope to make your everyday life better in return." />
</div>
{/* -------------------------------------------- */}

<ol className="list-decimal" >
    <li className="font-bold "> How we respect your privacy</li>
     <SimpleText text="Our approach at Inter IKEA Systems B.V. is to be as open and transparent as possible about how we collect and use your information."/>
     <SimpleText text="Second, we let you know what we do with your information. Who do we share it with? What do they do with it? You can read about that in section 3."/>
     <SimpleText text="Third, we protect your information and let you know how long we keep it. Read about that in sections 4 and 5."/>
     <SimpleText text="Finally, we let you know your choices when it comes to your personal information, including who to contact if you have questions or requests. Read about that in sections 6 and 7."/>


    <li className="font-bold "> What information we collect and why</li>
    <SimpleText text="We want to make your IKEA experience great! To do that we collect several types of information about you."/>


{/* ---------------------------------------- */}
<div className="flex font-bold justify-between lg:w-3/6 ">
<p >Type of information </p>
<p >Source, purpose and legal basis </p>
</div>
<div className="h-[1px] mt-1 w-full bg-black text-black "></div>

<div className="flex p-2">
   <p>Correspondence</p>
   <p className=" ml-16">We may collect and use records and copies of your correspondence (including e-mail addresses), if you contact us. We have a legitimate interest to use this to provide you with information that you request from us.</p>
</div>
<div className="flex  bg-gray mt-4 p-2">
   <p>Usage Details</p>
   <p className="w-5/6 ml-20">We use cookies and web beacons to collect statistical information about our Website users’ equipment, browsing actions and patterns. Such information derives from your visit to, any navigation of, the Website. The information may include, for example: (a) traffic, logs, and other communication data; (b) information regarding, the resources that you access; and (c) information about your computer and Internet connection, (e.g. including geolocation data, operating system and browser type), for system administration.</p>
</div>

<div className="  bg-gray mb-8 ">
  

   <p className="lg:w-5/6 w-3/6 lg:ml-44 ml-36 py-4 ">We use this information to improve our Website and to deliver a better and more personalised service by enabling us to: (a) estimate our audience size and usage patterns; (b) store information about your preferences, allowing us to customise our Website according to your individual interests; (c) and recognise you when you return to our Website. This is necessary for the purposes of our legitimate interest to provide you with the website services and to continuously improve these services.</p>
</div>
{/* ---------------------------------- */}

<li className="font-bold "> Who we share your information with</li>
     <SimpleText text="We do not sell or trade your information to third parties, but we share with others who can help us achieve the IKEA vision. That can be other IKEA companies, service providers or business partners. We’re all committed to keep your information safe and secure."/>
     <SimpleText text="We may share personal information with others:" />
{/* ---------------------------------------- */}
<div className="flex font-bold justify-between lg:w-2/6 w-3-6">
<p >Type  </p>
<p >Description and companys </p>
</div>
<div className="h-[1px] mt-1 w-full bg-black text-black "></div>

<div className="flex mt-4 p-2">
   <p className="underline">IKEA:</p>
   <p className=" ml-16">IKEA is one brand but many companies. Each plays a special role to achieve the IKEA vision. We may share your information with other companies operating under the IKEA brand.</p>
</div>
<div className="flex  bg-gray mt-4 mb-6 p-2">
   <p className="w-1 underline">Service providers:</p>
   <p className=" ml-24">We may also share your information with authorised IKEA service providers and contractors.</p>
</div>

{/* ---------------------------------- */}

<li className="font-bold "> How we keep your personal information safe</li>
     <SimpleText text="We protect your information from all kinds of threats: destruction, loss, alteration, unauthorized disclosure or access. We do this in a variety of ways depending on where we store and use it."/>
     <SimpleText text="Here are some things we do to keep your personal information safe:" />

{/* ------------------------------------------------- */}
<p className=" underline">Security</p>

<ul>
    <li className="mt-4">Security training and awareness of personnel;</li>
    <li className="mt-4 mb-4">Regular destruction of logs.</li>

</ul>
<p className=" underline">International transfers</p>
<SimpleText text="We do not transfer your personal data to a country outside the European Economic Area, which ensures the protection of your personal data by the GDPR." />

{/* ---------------------------------- */}

<li className="font-bold mt-2">  How long we keep your personal data</li>
     <SimpleText text="We keep your statistical information about our Website users’ equipment, browsing actions and patterns no longer than necessary and certainly no longer than 4 months after the information is collected."/>
     <SimpleText text="We keep your contact information no longer than one year after the relationship has ended or when you request us to remove the information." />
<SimpleText text="We may store your information longer than stated above if it is necessary because of legal requirements." />
{/* ---------------------------------- */}

<li className="font-bold mt-2"> Your privacy rights</li>
<SimpleText text="You have many rights regarding your personal information. Read more about them below. If you would like to exercise them or learn more, feel free to contact us! You can find contact detail at the end of this statement. Please note that some of the rights may not be applicable to your situation." />
{/* ******************************************************************* */}

<div>
<PrivacyList link="Right of access" text="You have the right to know what personal information we process and why. That’s why we inform you in advance about our processing activities via this statement. If you have any questions, or would you like to learn more about what information we process from you, you are always welcome to contact us and we will provide you with further information." />

<PrivacyList link="Right to rectification" text="If you believe we store wrong information about you, such as your name or address, you can ask us to correct this." />
<PrivacyList link="Right to erasure / right to be forgotten" text="You have the right to tell us to permanently erase your personal information from our records. You can do this for example if you believe there’s no longer any need for us to keep it. Or, if you previously have given your permission, you can just decide to withdraw it." />

<PrivacyList link="Right to restrict the processing activities" text="You have the right to restrict our processing activities in certain situations. This means we will continue to store your information, but we’ll temporarily stop any other processing. Why would you want to do this? For example if you’ve asked us to fix incorrect information. In this situation you may want us to stop processing until the information is correct." />

<PrivacyList link="Right to data portability" text="In certain situations you have the right to ask us to send your personal information in digital form to you, so that you can forward it to someone else." />

<PrivacyList link="Right to object" text="You have the right to object to the processing of your information, even when we have a legitimate legal reason to process it. You can do this when we process your information on the basis of our legitimate interest, and you believe that your personal interest outweighs ours. If you do not want us using your information for direct marketing purposes, including profiling, we will comply in any case." />

<PrivacyList link="Right to withdraw consent" text="If we process your personal information based on your consent, you have the right to withdraw your consent anytime.
Cookies - If you do not wish us to collect cookies, you may set your browser to refuse cookies, or to alert you when cookies are being sent. If you do so, please note that some parts of our Website may then be inaccessible or not function properly." />

<PrivacyList link="Right to lodge a complaint with a supervisory authority" text="If you aren’t satisfied with the way we treat your personal information, you have the right to lodge a complaint about us to the national supervisory authority." />

</div>

{/* ******************************************************************* */}

<li className="font-bold mt-4"> Who to contact?</li>
<SimpleText text="If you have questions about our privacy statement or practices, please feel free to get in touch. You can contact us at:"/>
<a className="underline text-blue mb-6">data.privacy@inter.ikea.com</a>

</ol>
        </div>
</>
 
    )
}

export default Statement ;