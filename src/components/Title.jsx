import Tags from "./Tags";
export default function Tilte() {
  return (
    <>
      <div className="box-border flex flex-col-reverse md:flex-row md:pt-28 sm:px-12">
        <div className="block box-border order-1 w-full">
          <div className="block box-border relative h-[320px] w-[320px] px-[34px] my-0 mx-auto">
            <div className="w-[192px] h-[192px] absolute block box-border md-top-1/2 md-left-1/2 top-[20%] left-[20%] rounded-[50%] bg-gradient-to-br from-sky-400 to-purple-700 blur-[75px]"></div>
            <img
              src="https://vitejs.dev/logo-with-shadow.png"
              alt=""
              className="absolute box-border block max-h-[192px] max-w-[192px] overflow-x-clip overflow-y-clip top-[20%] left-[20%]"
            />
          </div>
        </div>
        <div>
          <h1 className="bg-gradient-to-br from-blue-500 to-fuchsia-700 text-transparent bg-clip-text font-bold text-4xl sm:text-5xl md:text-left">
            Vite
          </h1>
          <p className="font-bold sm:text-5xl text-3xl md:text-left">
            Next Generation Frontend Tooling
          </p>
          <p className="font-medium text-lg text-[#98989F] md:text-left pt-2">
            Get read for a development enviroment that can finally catch up with
            you.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            <Tags />
          </div>
        </div>
      </div>
    </>
  );
}
