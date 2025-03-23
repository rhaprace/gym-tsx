
const Footer = () => {
  return (
    <footer className="bg-gray-20 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src=""/>
                    <p className="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repellendus suscipit commodi omnis adipisci. Similique libero cupiditate error necessitatibus consectetur at doloribus ipsum quidem optio, deleniti quaerat reiciendis rerum mollitia.
                    </p>
                    <p>
                        @copyright Atletech All Rights Reserved
                    </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Lorem ipsum dolor sit amet consectetur</p>
            <p className="my-5">Lorem ipsum dolor sit amet consectetur</p>
            <p className="my-5">Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Lorem ipsum dolor sit amet consectetur</p>
            <p>(+63)9426-5898-201</p>
            </div>
        </div>
    </footer>
  )
}
export default Footer