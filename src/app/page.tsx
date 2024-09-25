
import { TicketPercent, ArrowRight, ChevronDown, Cross, Search, User, ShoppingBag, Heart, Star, Instagram, Facebook, Mail } from 'lucide-react';

const Homepage = () => {
  	return (
    		<div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start text-center text-21xl text-black-900 font-caption-2-bold">
      			<div className="w-[1440px] relative bg-neutral-07-100 h-10 text-sm text-white font-caption-1">
        				<div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_196px)] flex flex-row items-start justify-center gap-3">
          					<div className="flex flex-row items-center justify-center gap-3">
            						<TicketPercent className="w-6 h-6" />
            						<div className="relative leading-[22px] font-semibold">{`30% off storewide — Limited time! `}</div>
          					</div>
          					<div className="border-yellow border-b-[1px] border-solid flex flex-row items-center justify-center text-left text-yellow">
            						<div className="flex flex-row items-center justify-start gap-1">
              							<div className="relative leading-[24px] font-medium">Shop Now</div>
              							<ArrowRight className="w-[18px] h-[18px]" />
            						</div>
          					</div>
        				</div>
        				<Cross className="absolute top-[calc(50%_-_10px)] right-[16px] w-5 h-5" />
      			</div>
      			<div className="w-[1440px] [background:linear-gradient(rgba(255,_171,_0,_0.64),_rgba(255,_171,_0,_0.64)),_#fff] flex flex-row items-center justify-between py-4 px-40 box-border text-5xl text-black1">
        				<div className="w-[105px] relative h-6">
          					<div className="absolute top-[0px] left-[0px] leading-[24px] font-medium">
            						<span>3legant</span>
            						<span className="text-neutral-07-100">.
</span>
          					</div>
        				</div>
        				<div className="flex flex-row items-center justify-center gap-10 text-left text-sm text-neutral-07-100 font-button-xsmall">
          					<div className="flex flex-row items-center justify-start">
            						<div className="flex flex-row items-center justify-start">
              							<div className="flex flex-row items-center justify-start">
                								<div className="relative leading-[24px] font-medium">Home</div>
              							</div>
            						</div>
          					</div>
          					<div className="flex flex-row items-center justify-start">
            						<div className="flex flex-row items-center justify-start gap-0.5">
              							<div className="flex flex-row items-center justify-start">
                								<div className="relative leading-[24px] font-medium">Shop</div>
              							</div>
              							<ChevronDown className="w-[18px] h-[18px]" />
            						</div>
          					</div>
          					<div className="flex flex-row items-center justify-start">
            						<div className="flex flex-row items-center justify-start gap-0.5">
              							<div className="flex flex-row items-center justify-start">
                								<div className="relative leading-[24px] font-medium">Product</div>
              							</div>
              							<ChevronDown className="w-[18px] h-[18px]" />
            						</div>
          					</div>
          					<div className="flex flex-row items-center justify-start">
            						<div className="flex flex-row items-center justify-start">
              							<div className="flex flex-row items-center justify-start">
                								<div className="relative leading-[24px] font-medium">Contact Us</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className="flex flex-row items-center justify-end gap-4 text-xs text-yellow font-caption-1">
          					<Search className="w-6 h-6" />
          					<User className="w-6 h-6" />
          					<div className="w-[50px] relative h-7">
            						<div className="absolute top-[4px] left-[30px] w-5 h-5 overflow-hidden">
              							<div className="absolute top-[calc(50%_-_10px)] right-[0px] rounded-[50%] bg-neutral-07-100 w-5 h-5" />
              							<b className="absolute top-[calc(50%_-_5px)] right-[6px] leading-[10px]">2</b>
            						</div>
            						<ShoppingBag className="absolute top-[2px] left-[1px] w-6 h-6" />
          					</div>
        				</div>
      			</div>
      			<div className="w-[1440px] relative h-[820px] text-left text-61xl">
        				<img className="absolute top-[0px] left-[0px] w-[1440px] h-[820px] object-cover" alt="" src="Image Placeholder.png" />
        				<div className="absolute top-[calc(50%_-_188px)] left-[calc(50%_+_12px)] w-[538px] flex flex-col items-start justify-center gap-7">
          					<div className="self-stretch flex flex-col items-start justify-center gap-2">
            						<div className="self-stretch flex flex-col items-start justify-center">
              							<div className="self-stretch relative tracking-[-3px] leading-[84px] font-medium">
                								<p className="m-0">{`Listen to `}</p>
                								<p className="m-0">
                  									<span>{`the `}</span>
                  									<span className="text-blue">amazing</span>
                  									<span className="text-black-900"> music sound.</span>
                								</p>
              							</div>
            						</div>
            						<div className="w-[424px] relative text-xl leading-[32px] font-caption-1 inline-block">Experience music like never before</div>
          					</div>
          					<div className="rounded-lg bg-neutral-07-100 flex flex-row items-center justify-center py-3 px-14 text-center text-lg text-white font-caption-1">
            						<div className="relative tracking-[-0.4px] leading-[32px] font-medium">Shopping Now</div>
          					</div>
        				</div>
      			</div>
      			<div className="flex flex-row items-start justify-start py-10 px-40 gap-6">
        				<div className="w-[167px] relative h-16 bg-[url('https://via.placeholder.com/167x64')] bg-cover bg-no-repeat bg-[top] opacity-[0.4]">
          					<div className="absolute top-[0px] left-[0px] w-[167px] h-16" />
        				</div>
        				<div className="w-[167px] relative h-16 bg-[url('https://via.placeholder.com/167x64')] bg-cover bg-no-repeat bg-[top] opacity-[0.4]">
          					<div className="absolute top-[0px] left-[0px] w-[167px] h-16" />
        				</div>
        				<div className="w-[167px] relative h-16 bg-[url('https://via.placeholder.com/167x64')] bg-cover bg-no-repeat bg-[top] opacity-[0.4]">
          					<div className="absolute top-[0px] left-[0px] w-[167px] h-16" />
        				</div>
        				<div className="w-[167px] relative h-16 bg-[url('https://via.placeholder.com/167x64')] bg-cover bg-no-repeat bg-[top] opacity-[0.4]">
          					<div className="absolute top-[0px] left-[0px] w-[167px] h-16" />
        				</div>
        				<div className="w-[167px] relative h-16 bg-[url('https://via.placeholder.com/167x64')] bg-cover bg-no-repeat bg-[top] opacity-[0.4]">
          					<div className="absolute top-[0px] left-[0px] w-[167px] h-16" />
        				</div>
        				<div className="w-[167px] relative h-16 bg-[url('https://via.placeholder.com/167x64')] bg-cover bg-no-repeat bg-[top] opacity-[0.4]">
          					<div className="absolute top-[0px] left-[0px] w-[167px] h-16" />
        				</div>
      			</div>
      			<div className="w-[1440px] bg-white flex flex-col items-start justify-start py-12 pl-40 pr-0 box-border gap-12 text-left text-black1">
        				<div className="w-[1120px] flex flex-row items-center justify-between">
          					<div className="relative tracking-[-0.4px] leading-[44px] font-medium">New Arrivals</div>
          					<div className="flex flex-row items-center justify-end gap-2">
            						<Star className="w-4 h-4" />
            						<Star className="w-4 h-4" />
            						<Star className="w-4 h-4" />
          					</div>
        				</div>
        				<div className="w-[1280px] flex flex-row items-start justify-start gap-6 text-center text-base text-black-900 font-caption-1">
          					<div className="flex flex-col items-start justify-start gap-3 text-neutral-01-100">
            						<div className="w-[262px] relative h-[349px]">
              							<img className="absolute top-[0px] left-[0px] w-[262px] h-[349px] overflow-hidden object-cover" alt="" src="Image Placeholder.png" />
              							<div className="absolute h-[13.18%] w-[87.79%] top-[82.23%] right-[6.11%] bottom-[4.58%] left-[6.11%] shadow-[0px_8px_16px_rgba(0,_0,_0,_0.04)] rounded-lg bg-neutral-07-100 flex flex-row items-center justify-center py-2 px-6 box-border">
                								<div className="relative tracking-[-0.4px] leading-[28px] font-medium">Add to cart</div>
              							</div>
              							<div className="absolute top-[16px] right-[16px] shadow-[0px_8px_16px_-8px_rgba(15,_15,_15,_0.12)] rounded-[32px] bg-white w-8 h-8 flex flex-row items-center justify-center p-1.5 box-border">
                								<Heart className="w-5 h-5" />
              							</div>
              							<div className="absolute top-[16px] left-[16px] flex flex-col items-start justify-start text-black-900">
                								<div className="rounded bg-white flex flex-row items-center justify-center py-1 px-3.5">
                  									<b className="relative leading-[16px] uppercase">NEW</b>
                								</div>
              							</div>
            						</div>
            						<div className="w-[262px] flex flex-col items-start justify-start text-left text-neutral-07-100">
              							<div className="self-stretch flex flex-col items-start justify-start gap-1">
                								<Star className="w-[88px] h-4" />
                								<div className="self-stretch relative leading-[26px] font-semibold">Skullcandy - Crusher anc 2 wireless headphones</div>
                								<div className="flex flex-row items-start justify-start gap-3 text-sm text-black-900">
                  									<div className="relative leading-[22px] font-semibold">$299.99</div>
                  									<div className="w-[57px] relative [text-decoration:line-through] leading-[22px] text-neutral-04-100 hidden">$400.00</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className="flex flex-col items-start justify-start gap-3">
            						<div className="w-[262px] relative h-[349px]">
              							<img className="absolute top-[0px] left-[0px] w-[262px] h-[349px] overflow-hidden object-cover" alt="" src="Image Placeholder.png" />
              							<div className="absolute top-[16px] left-[16px] flex flex-col items-start justify-start">
                								<div className="rounded bg-white flex flex-row items-center justify-center py-1 px-3.5">
                  									<b className="relative leading-[16px] uppercase">NEW</b>
                								</div>
              							</div>
            						</div>
            						<div className="w-[262px] flex flex-col items-start justify-start text-left text-neutral-07-100">
              							<div className="self-stretch flex flex-col items-start justify-start gap-1">
                								<Star className="w-[88px] h-4" />
                								<div className="self-stretch relative leading-[26px] font-semibold">
                  									<p className="m-0">Beats</p>
                  									<p className="m-0">Studio Pro</p>
                								</div>
                								<div className="flex flex-row items-start justify-start gap-3 text-sm text-black-900">
                  									<div className="relative leading-[22px] font-semibold">$349.99</div>
                  									<div className="w-[57px] relative [text-decoration:line-through] leading-[22px] text-neutral-04-100 hidden">$400.00</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className="flex flex-col items-start justify-start gap-3">
            						<div className="w-[262px] relative h-[349px]">
              							<img className="absolute top-[0px] left-[0px] w-[262px] h-[349px] overflow-hidden object-cover" alt="" src="Image Placeholder.png" />
              							<div className="absolute top-[16px] left-[16px] flex flex-col items-start justify-start">
                								<div className="rounded bg-white flex flex-row items-center justify-center py-1 px-3.5">
                  									<b className="relative leading-[16px] uppercase">NEW</b>
                								</div>
              							</div>
            						</div>
            						<div className="w-[262px] flex flex-col items-start justify-start text-left text-neutral-07-100">
              							<div className="self-stretch flex flex-col items-start justify-start gap-1">
                								<Star className="w-[88px] h-4" />
                								<div className="self-stretch relative leading-[26px] font-semibold">Sony - WH-CH720N Wireless Noise Canceling</div>
                								<div className="flex flex-row items-start justify-start gap-3 text-sm text-black-900">
                  									<div className="relative leading-[22px] font-semibold">$149.99</div>
                  									<div className="w-[57px] relative [text-decoration:line-through] leading-[22px] text-neutral-04-100 hidden">$400.00</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className="w-[262px] relative h-[433px]">
            						<div className="absolute h-[80.6%] w-full top-[0%] right-[0%] bottom-[19.4%] left-[0%]">
              							<img className="absolute top-[0px] left-[0px] w-[262px] h-[349px] overflow-hidden object-cover" alt="" src="Image Placeholder.png" />
              							<div className="absolute top-[16px] left-[16px] flex flex-col items-start justify-start">
                								<div className="rounded bg-white flex flex-row items-center justify-center py-1 px-3.5">
                  									<b className="relative leading-[16px] uppercase">NEW</b>
                								</div>
              							</div>
            						</div>
            						<div className="absolute top-[361px] left-[0px] w-[262px] flex flex-col items-start justify-start text-left text-neutral-07-100">
              							<div className="self-stretch flex flex-col items-start justify-start gap-1">
                								<Star className="w-[88px] h-4" />
                								<div className="self-stretch relative leading-[26px] font-semibold">Skullcandy - Rail True Wireless Earbuds</div>
                								<div className="flex flex-row items-start justify-start text-sm text-black-900">
                  									<div className="relative leading-[22px] font-semibold">$79.99</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className="w-[262px] relative h-[433px]">
            						<div className="absolute h-[80.6%] w-full top-[0%] right-[0%] bottom-[19.4%] left-[0%]">
              							<img className="absolute top-[0px] left-[0px] w-[262px] h-[349px] overflow-hidden object-cover" alt="" src="Image Placeholder.png" />
              							<div className="absolute top-[16px] left-[16px] flex flex-col items-start justify-start">
                								<div className="rounded bg-white flex flex-row items-center justify-center py-1 px-3.5">
                  									<b className="relative leading-[16px] uppercase">NEW</b>
                								</div>
              							</div>
            						</div>
            						<div className="absolute top-[361px] left-[0px] w-[262px] flex flex-col items-start justify-start text-left text-neutral-07-100">
              							<div className="self-stretch flex flex-col items-start justify-start gap-1">
                								<Star className="w-[88px] h-4" />
                								<div className="self-stretch relative leading-[26px] font-semibold">
                  									<p className="m-0">{`Beats `}</p>
                  									<p className="m-0">Studio Pro</p>
                								</div>
                								<div className="flex flex-row items-start justify-start text-sm text-black-900">
                  									<div className="relative leading-[22px] font-semibold">$224.99</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className="flex flex-col items-center justify-start pt-12 px-0 pb-0 gap-12 text-left text-black1">
        				<div className="w-[1120px] flex flex-row items-center justify-start">
          					<div className="relative tracking-[-0.4px] leading-[44px] font-medium">Shop Collection</div>
        				</div>
        				<div className="w-[1440px] bg-white flex flex-row items-start justify-center py-0 px-40 box-border gap-6 text-15xl text-black-900">
          					<div className="w-[548px] relative h-[664px]">
            						<img className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover" alt="" src="Image Placeholder.png" />
            						<div className="absolute top-[538px] left-[48px] flex flex-col items-start justify-start gap-3">
              							<div className="w-[360px] flex flex-col items-start justify-start gap-3">
                								<div className="self-stretch relative tracking-[-0.6px] leading-[38px] font-medium">Headband</div>
                								<div className="w-[360px] relative text-base leading-[26px] font-caption-1 text-text-blue whitespace-pre-wrap hidden">Phosfluor escently engage worldwide  with web-enabled technology.</div>
              							</div>
              							<div className="border-black-900 border-b-[1px] border-solid flex flex-row items-center justify-start gap-1 text-base font-caption-1">
                								<div className="flex flex-row items-center justify-start">
                  									<div className="relative tracking-[-0.4px] leading-[28px] font-medium">Collection</div>
                								</div>
                								<ArrowRight className="w-5 h-5" />
              							</div>
            						</div>
          					</div>
          					<div className="w-[548px] h-[662px] flex flex-col items-start justify-start gap-6">
            						<div className="w-[548px] relative h-[319px]">
              							<img className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover" alt="" src="Image Placeholder.png" />
              							<div className="absolute bottom-[40px] left-[32px] w-[420px] flex flex-col items-start justify-start gap-3">
                								<div className="w-[516px] relative tracking-[-0.6px] leading-[38px] font-medium inline-block">Earbuds</div>
                								<div className="border-black-900 border-b-[1px] border-solid flex flex-row items-center justify-start gap-1 text-base font-caption-1">
                  									<div className="flex flex-row items-center justify-start">
                    										<div className="relative tracking-[-0.4px] leading-[28px] font-medium">Collection</div>
                  									</div>
                  									<ArrowRight className="w-5 h-5" />
                								</div>
              							</div>
            						</div>
            						<div className="w-[548px] relative h-[319px]">
              							<img className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover" alt="" src="Image Placeholder.png" />
              							<div className="absolute bottom-[40px] left-[32px] w-[420px] flex flex-col items-start justify-start gap-3">
                								<div className="w-[516px] relative tracking-[-0.6px] leading-[38px] font-medium inline-block">Accessories</div>
                								<div className="border-black-900 border-b-[1px] border-solid flex flex-row items-center justify-start gap-1 text-base font-caption-1">
                  									<div className="flex flex-row items-center justify-start">
                    										<div className="relative tracking-[-0.4px] leading-[28px] font-medium">Collection</div>
                  									</div>
                  									<ArrowRight className="w-5 h-5" />
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className="w-[1440px] bg-white flex flex-col items-start justify-start pt-12 pb-[100px] pl-40 pr-0 box-border gap-12 text-base font-caption-1">
        				<div className="w-[1120px] flex flex-row items-center justify-start text-left text-21xl text-black1 font-caption-2-bold">
          					<div className="relative tracking-[-0.4px] leading-[44px] font-medium">Best Seller</div>
        				</div>
        				<div className="w-[1120px] flex flex-row items-start justify-start gap-6">
          					<div className="flex flex-col items-start justify-start gap-3">
            						<div className="w-[262px] relative h-[349px]">
              							<img className="absolute top-[0px] left-[0px] w-[262px] h-[349px] overflow-hidden object-cover" alt="" src="Image Placeholder.png" />
              							<div className="absolute top-[16px] left-[16px] flex flex-col items-start justify-start">
                								<div className="rounded bg-white flex flex-row items-center justify-center py-1 px-3.5">
                  									<b className="relative leading-[16px] uppercase">Hot</b>
                								</div>
              							</div>
            						</div>
            						<div className="w-[262px] flex flex-col items-start justify-start text-left text-neutral-07-100">
              							<div className="self-stretch flex flex-col items-start justify-start gap-1">
                								<Star className="w-[88px] h-4" />
                								<div className="self-stretch relative leading-[26px] font-semibold">Sony - WH-1000XM5 Wireless Noise Canceling</div>
                								<div className="flex flex-row items-start justify-start gap-3 text-sm text-black-900">
                  									<div className="relative leading-[22px] font-semibold">$299.99</div>
                  									<div className="w-[57px] relative [text-decoration:line-through] leading-[22px] text-neutral-04-100 hidden">$400.00</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className="flex flex-col items-start justify-start gap-3">
            						<div className="w-[262px] relative h-[349px]">
              							<img className="absolute top-[0px] left-[0px] w-[262px] h-[349px] overflow-hidden object-cover" alt="" src="Image Placeholder.png" />
              							<div className="absolute top-[16px] left-[16px] flex flex-col items-start justify-start">
                								<div className="rounded bg-white flex flex-row items-center justify-center py-1 px-3.5">
                  									<b className="relative leading-[16px] uppercase">hot</b>
                								</div>
              							</div>
            						</div>
            						<div className="w-[262px] flex flex-col items-start justify-start text-left text-neutral-07-100">
              							<div className="self-stretch flex flex-col items-start justify-start gap-1">
                								<Star className="w-[88px] h-4" />
                								<div className="self-stretch relative leading-[26px] font-semibold">
                  									<p className="m-0">Studio Pro</p>
                								</div>
                								<div className="flex flex-row items-start justify-start gap-3 text-sm text-black-900">
                  									<div className="relative leading-[22px] font-semibold">$349.99</div>
                  									<div className="w-[57px] relative [text-decoration:line-through] leading-[22px] text-neutral-04-100 hidden">$400.00</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className="flex flex-col items-start justify-start gap-3">
            						<div className="w-[262px] relative h-[349px]">
              							<img className="absolute top-[0px] left-[0px] w-[262px] h-[349px] overflow-hidden object-cover" alt="" src="Image Placeholder.png" />
              							<div className="absolute top-[16px] left-[16px] flex flex-col items-start justify-start">
                								<div className="rounded bg-white flex flex-row items-center justify-center py-1 px-3.5">
                  									<b className="relative leading-[16px] uppercase">hot</b>
                								</div>
              							</div>
            						</div>
            						<div className="w-[262px] flex flex-col items-start justify-start text-left text-neutral-07-100">
              							<div className="self-stretch flex flex-col items-start justify-start gap-1">
                								<Star className="w-[88px] h-4" />
                								<div className="self-stretch relative leading-[26px] font-semibold">Sony - WH-CH720N Wireless Noise Canceling</div>
                								<div className="flex flex-row items-start justify-start gap-3 text-sm text-black-900">
                  									<div className="relative leading-[22px] font-semibold">$149.99</div>
                  									<div className="w-[57px] relative [text-decoration:line-through] leading-[22px] text-neutral-04-100 hidden">$400.00</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className="w-[262px] relative h-[433px]">
            						<div className="absolute h-[80.6%] w-full top-[0%] right-[0%] bottom-[19.4%] left-[0%]">
              							<img className="absolute top-[0px] left-[0px] w-[262px] h-[349px] overflow-hidden object-cover" alt="" src="Image Placeholder.png" />
              							<div className="absolute top-[16px] left-[16px] flex flex-col items-start justify-start">
                								<div className="rounded bg-white flex flex-row items-center justify-center py-1 px-3.5">
                  									<b className="relative leading-[16px] uppercase">hot</b>
                								</div>
              							</div>
            						</div>
            						<div className="absolute top-[361px] left-[0px] w-[262px] flex flex-col items-start justify-start text-left text-neutral-07-100">
              							<div className="self-stretch flex flex-col items-start justify-start gap-1">
                								<Star className="w-[88px] h-4" />
                								<div className="self-stretch relative leading-[26px] font-semibold">Skullcandy - Rail True Wireless Earbuds</div>
                								<div className="flex flex-row items-start justify-start text-sm text-black-900">
                  									<div className="relative leading-[22px] font-semibold">$79.99</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className="w-[1120px] flex flex-row items-start justify-start gap-6">
          					<div className="flex flex-col items-start justify-start gap-3">
            						<div className="w-[262px] relative h-[349px]">
              							<img className="absolute top-[0px] left-[0px] w-[262px] h-[349px] overflow-hidden object-cover" alt="" src="https://via.placeholder.com/262x349" />
              							<div className="absolute top-[16px] left-[16px] flex flex-col items-start justify-start">
                								<div className="rounded bg-white flex flex-row items-center justify-center py-1 px-3.5">
                  									<b className="relative leading-[16px] uppercase">Hot</b>
                								</div>
              							</div>
            						</div>
            						<div className="w-[262px] flex flex-col items-start justify-start text-left text-neutral-07-100">
              							<div className="self-stretch flex flex-col items-start justify-start gap-1">
                								<img className="w-[88px] relative h-4" alt="" src="https://via.placeholder.com/88x16" />
                								<div className="self-stretch relative leading-[26px] font-semibold">
                  									<p className="m-0">{`Beats `}</p>
                  									<p className="m-0">Studio Pro</p>
                								</div>
                								<div className="flex flex-row items-start justify-start gap-3 text-sm text-black-900">
                  									<div className="relative leading-[22px] font-semibold">$249.99</div>
                  									<div className="w-[57px] relative [text-decoration:line-through] leading-[22px] text-neutral-04-100 hidden">$400.00</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className="flex flex-col items-start justify-start gap-3">
            						<div className="w-[262px] relative h-[349px]">
              							<img className="absolute top-[0px] left-[0px] w-[262px] h-[349px] overflow-hidden object-cover" alt="" src="https://via.placeholder.com/262x349" />
              							<div className="absolute top-[16px] left-[16px] flex flex-col items-start justify-start">
                								<div className="rounded bg-white flex flex-row items-center justify-center py-1 px-3.5">
                  									<b className="relative leading-[16px] uppercase">hot</b>
                								</div>
              							</div>
            						</div>
            						<div className="w-[262px] flex flex-col items-start justify-start text-left text-neutral-07-100">
              							<div className="self-stretch flex flex-col items-start justify-start gap-1">
                								<img className="w-[88px] relative h-4" alt="" src="https://via.placeholder.com/88x16" />
                								<div className="self-stretch relative leading-[26px] font-semibold">JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports</div>
                								<div className="flex flex-row items-start justify-start gap-3 text-sm text-black-900">
                  									<div className="relative leading-[22px] font-semibold">$179.95</div>
                  									<div className="w-[57px] relative [text-decoration:line-through] leading-[22px] text-neutral-04-100 hidden">$400.00</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className="flex flex-col items-start justify-start gap-3">
            						<div className="w-[262px] relative h-[349px]">
              							<img className="absolute top-[0px] left-[0px] w-[262px] h-[349px] overflow-hidden object-cover" alt="" src="https://via.placeholder.com/262x349" />
              							<div className="absolute top-[16px] left-[16px] flex flex-col items-start justify-start">
                								<div className="rounded bg-white flex flex-row items-center justify-center py-1 px-3.5">
                  									<b className="relative leading-[16px] uppercase">hot</b>
                								</div>
              							</div>
            						</div>
            						<div className="w-[262px] flex flex-col items-start justify-start text-left text-neutral-07-100">
              							<div className="self-stretch flex flex-col items-start justify-start gap-1">
                								<img className="w-[88px] relative h-4" alt="" src="https://via.placeholder.com/88x16" />
                								<div className="self-stretch relative leading-[26px] font-semibold">
                  									<p className="m-0">Bose</p>
                  									<p className="m-0">QuietComfort Headphones</p>
                								</div>
                								<div className="flex flex-row items-start justify-start gap-3 text-sm text-black-900">
                  									<div className="relative leading-[22px] font-semibold">$349.00</div>
                  									<div className="w-[57px] relative [text-decoration:line-through] leading-[22px] text-neutral-04-100 hidden">$400.00</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className="w-[262px] relative h-[433px]">
            						<div className="absolute h-[80.6%] w-full top-[0%] right-[0%] bottom-[19.4%] left-[0%]">
              							<img className="absolute top-[0px] left-[0px] w-[262px] h-[349px] overflow-hidden object-cover" alt="" src="https://via.placeholder.com/262x349" />
              							<div className="absolute top-[16px] left-[16px] flex flex-col items-start justify-start">
                								<div className="rounded bg-white flex flex-row items-center justify-center py-1 px-3.5">
                  									<b className="relative leading-[16px] uppercase">hot</b>
                								</div>
              							</div>
            						</div>
            						<div className="absolute top-[361px] left-[0px] w-[262px] flex flex-col items-start justify-start text-left text-neutral-07-100">
              							<div className="self-stretch flex flex-col items-start justify-start gap-1">
                								<img className="w-[88px] relative h-4" alt="" src="https://via.placeholder.com/88x16" />
                								<div className="self-stretch relative leading-[26px] font-semibold">
                  									<p className="m-0">AKG</p>
                  									<p className="m-0">Y600NC Wireless</p>
                								</div>
                								<div className="flex flex-row items-start justify-start text-sm text-black-900">
                  									<div className="relative leading-[22px] font-semibold">$349.99</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className="w-[1440px] relative h-[532px] text-left text-base font-caption-1">
        				<div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
          					<img className="absolute h-full w-[calc(100%_-_720px)] top-[0px] right-[720px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover" alt="" src="https://via.placeholder.com/720x532" />
          					<div className="absolute top-[calc(50%_-_266px)] left-[720px] [background:linear-gradient(rgba(255,_171,_0,_0.4),_rgba(255,_171,_0,_0.4)),_#fff] w-[720px] h-[532px] flex flex-col items-start justify-center py-0 pl-[72px] pr-40 box-border gap-6">
            						<div className="flex flex-col items-start justify-start gap-4">
              							<b className="self-stretch relative leading-[16px] uppercase text-blue">pROMOTION</b>
              							<div className="self-stretch relative text-21xl tracking-[-0.4px] leading-[44px] font-medium font-caption-2-bold">Hurry up! 40% OFF</div>
              							<div className="w-[452px] relative text-xl leading-[32px] inline-block">Thousands of high tech are waiting for you</div>
            						</div>
            						<div className="flex flex-col items-start justify-center gap-3 text-neutral-07-100">
              							<div className="w-[360px] relative leading-[26px] inline-block">Offer expires in:</div>
              							<div className="flex flex-row items-start justify-start gap-4 text-center text-15xl font-caption-2-bold">
                								<div className="w-[60px] relative h-20">
                  									<div className="absolute top-[0px] left-[0px] bg-neutral-01-100 w-[60px] h-[60px]">
                    										<div className="absolute top-[calc(50%_-_19px)] left-[calc(50%_-_20px)] tracking-[-0.6px] leading-[38px] font-medium">02</div>
                  									</div>
                  									<div className="absolute top-[60px] left-[15px] text-xs leading-[20px] font-caption-1">Days</div>
                								</div>
                								<div className="w-[60px] relative h-20">
                  									<div className="absolute top-[0px] left-[0px] bg-neutral-01-100 w-[60px] h-[60px]">
                    										<div className="absolute top-[calc(50%_-_19px)] left-[calc(50%_-_15px)] tracking-[-0.6px] leading-[38px] font-medium">12</div>
                  									</div>
                  									<div className="absolute top-[60px] left-[12px] text-xs leading-[20px] font-caption-1">Hours</div>
                								</div>
                								<div className="w-[60px] relative h-20">
                  									<div className="absolute top-[0px] left-[0px] bg-neutral-01-100 w-[60px] h-[60px]">
                    										<div className="absolute top-[calc(50%_-_19px)] left-[calc(50%_-_22px)] tracking-[-0.6px] leading-[38px] font-medium">45</div>
                  									</div>
                  									<div className="absolute top-[60px] left-[6px] text-xs leading-[20px] font-caption-1">Minutes</div>
                								</div>
                								<div className="w-[60px] relative h-20">
                  									<div className="absolute top-[0px] left-[0px] bg-neutral-01-100 w-[60px] h-[60px]">
                    										<div className="absolute top-[calc(50%_-_19px)] left-[calc(50%_-_21px)] tracking-[-0.6px] leading-[38px] font-medium">05</div>
                  									</div>
                  									<div className="absolute top-[60px] left-[4px] text-xs leading-[20px] font-caption-1">Seconds</div>
                								</div>
              							</div>
            						</div>
            						<div className="rounded-lg bg-neutral-07-100 flex flex-row items-center justify-center py-1.5 px-10 text-center text-white">
              							<div className="relative tracking-[-0.4px] leading-[28px] font-medium">Shop now</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className="w-[1440px] bg-white flex flex-row items-start justify-start py-10 px-40 box-border gap-6 text-left text-xl text-neutral-07-100">
        				<div className="flex-1 bg-neutral-02-100 flex flex-col items-start justify-start py-12 px-8 gap-4">
          					<img className="w-12 relative h-12 overflow-hidden shrink-0" alt="" src="https://via.placeholder.com/48" />
          					<div className="flex flex-col items-start justify-start gap-2">
            						<div className="relative leading-[28px] font-medium">Free Shipping</div>
            						<div className="w-[198px] relative text-sm leading-[24px] text-neutral-04-100 inline-block">Order above $200</div>
          					</div>
        				</div>
        				<div className="flex-1 bg-neutral-02-100 flex flex-col items-start justify-start py-12 px-8 gap-4">
          					<img className="w-12 relative h-12 overflow-hidden shrink-0" alt="" src="https://via.placeholder.com/48" />
          					<div className="w-[198px] flex flex-col items-start justify-start gap-2">
            						<div className="relative leading-[28px] font-medium">Money-back</div>
            						<div className="w-[198px] relative text-sm leading-[24px] text-neutral-04-100 inline-block">30 days guarantee</div>
          					</div>
        				</div>
        				<div className="flex-1 bg-neutral-02-100 flex flex-col items-start justify-start py-12 px-8 gap-4">
          					<img className="w-12 relative h-12 overflow-hidden shrink-0" alt="" src="https://via.placeholder.com/48" />
          					<div className="flex flex-col items-start justify-start gap-2">
            						<div className="relative leading-[28px] font-medium">Secure Payments</div>
            						<div className="w-[198px] relative text-sm leading-[24px] text-neutral-04-100 inline-block">Secured by Stripe</div>
          					</div>
        				</div>
        				<div className="flex-1 bg-neutral-02-100 flex flex-col items-start justify-start py-12 px-8 gap-4">
          					<img className="w-12 relative h-12 overflow-hidden shrink-0" alt="" src="https://via.placeholder.com/48" />
          					<div className="flex flex-col items-start justify-start gap-2">
            						<div className="relative leading-[28px] font-medium">24/7 Support</div>
            						<div className="w-[198px] relative text-sm leading-[24px] text-neutral-04-100 inline-block">Phone and Email support</div>
          					</div>
        				</div>
      			</div>
      			<div className="w-[1440px] bg-white flex flex-col items-center justify-start py-10 px-40 box-border gap-10 text-xl text-neutral-04-100 font-caption-1">
        				<div className="flex flex-col items-center justify-start gap-4">
          					<b className="self-stretch relative text-base leading-[16px] uppercase">newsfeed</b>
          					<div className="self-stretch relative text-21xl tracking-[-0.4px] leading-[44px] font-medium font-caption-2-bold text-black-900">Instagram</div>
          					<div className="relative leading-[32px] text-black-900">{`Follow us on social media for more discount & promotions`}</div>
          					<div className="relative leading-[28px] font-medium font-caption-2-bold">@3legant_official</div>
        				</div>
        				<div className="flex flex-row items-start justify-center gap-6">
          					<img className="w-[262px] relative h-[262px] overflow-hidden shrink-0 object-cover" alt="" src="https://via.placeholder.com/262" />
          					<img className="w-[262px] relative h-[262px] overflow-hidden shrink-0 object-cover" alt="" src="https://via.placeholder.com/262" />
          					<img className="w-[262px] relative h-[262px] overflow-hidden shrink-0 object-cover" alt="" src="https://via.placeholder.com/262" />
          					<img className="w-[262px] relative h-[262px] overflow-hidden shrink-0 object-cover" alt="" src="https://via.placeholder.com/262" />
        				</div>
      			</div>
      			<div className="w-[1440px] relative h-[360px]">
        				<div className="absolute top-[0px] left-[0px] w-[1440px] h-[360px]">
          					<img className="absolute top-[0px] left-[0px] w-[1440px] h-[360px] overflow-hidden object-cover" alt="" src="https://via.placeholder.com/1440x360" />
          					<div className="absolute top-[101px] left-[450px] flex flex-col items-center justify-center gap-8">
            						<div className="flex flex-col items-center justify-start gap-2">
              							<div className="w-[456px] relative tracking-[-0.4px] leading-[44px] font-medium inline-block">Join Our Newsletter</div>
              							<div className="w-[540px] relative text-lg leading-[30px] font-caption-1 inline-block">Sign up for deals, new products and promotions</div>
            						</div>
            						<div className="w-[488px] h-[52px] flex flex-col items-start justify-center text-left text-base text-neutral-04-100 font-caption-1">
              							<div className="self-stretch border-neutral-04-50 border-b-[1px] border-solid box-border h-[52px] flex flex-row items-center justify-start gap-2">
                								<div className="flex-1 flex flex-row items-center justify-start gap-2">
                  									<img className="w-6 relative h-6 object-cover" alt="" src="https://via.placeholder.com/24" />
                  									<div className="flex-1 relative tracking-[-0.4px] leading-[28px] font-medium">Email address</div>
                								</div>
                								<div className="flex flex-row items-center justify-start">
                  									<div className="flex flex-row items-center justify-start gap-1">
                    										<div className="w-[18px] relative h-[18px] hidden" />
                    										<div className="relative tracking-[-0.4px] leading-[28px] font-medium">Signup</div>
                  									</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className="bg-neutral-07-100 flex flex-col items-start justify-start pt-20 px-40 pb-8 gap-[49px] text-5xl text-white">
        				<div className="w-[1120px] relative h-8">
          					<div className="absolute top-[0px] left-[0px] w-[1120px] flex flex-row items-center justify-between">
            						<div className="w-[544px] flex flex-row items-center justify-start gap-8">
              							<div className="w-[105px] relative h-6">
                								<div className="absolute top-[0px] left-[0px] leading-[24px] font-medium">
                  									<span>3legant</span>
                  									<span className="text-neutral-04-100">.
</span>
                								</div>
              							</div>
              							<div className="w-px relative bg-neutral-04-100 h-6" />
              							<div className="w-[350px] relative text-sm leading-[22px] font-caption-1 text-neutral-03-100 text-left inline-block shrink-0">Headphone Store</div>
            						</div>
            						<div className="flex flex-row items-start justify-start gap-10 text-left text-sm text-neutral-01-100 font-caption-1">
              							<div className="relative leading-[22px]">Home</div>
              							<div className="relative leading-[22px]">Shop</div>
              							<div className="relative leading-[22px]">Product</div>
              							<div className="relative leading-[22px]">Blog</div>
              							<div className="relative leading-[22px]">Contact Us</div>
            						</div>
          					</div>
        				</div>
        				<div className="w-[1118px] border-neutral-04-100 border-t-[0.5px] border-solid box-border flex flex-row items-start justify-between py-4 px-0 text-left text-xs text-neutral-01-100">
          					<div className="flex flex-row items-start justify-start gap-7">
            						<div className="relative leading-[20px] text-neutral-03-100">Copyright © 2023 3legant. All rights reserved</div>
            						<div className="relative leading-[20px] font-semibold">Privacy Policy</div>
            						<div className="relative leading-[20px] font-semibold">Terms of Use</div>
          					</div>
          					<div className="flex flex-row items-start justify-start gap-6">
            						<img className="w-6 relative h-6" alt="" src="https://via.placeholder.com/24" />
            						<img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="https://via.placeholder.com/24" />
            						<div className="w-6 relative h-6 overflow-hidden shrink-0">
              							<div className="absolute h-[81.25%] w-[89.58%] top-[9.38%] right-[5.21%] bottom-[9.38%] left-[5.21%] rounded border-neutral-01-100 border-[1.5px] border-solid box-border" />
              							<img className="absolute h-[33.33%] w-[33.33%] top-[33.33%] right-[29.17%] bottom-[33.33%] left-[37.5%] rounded-[1px] max-w-full overflow-hidden max-h-full" alt="" src="https://via.placeholder.com/8" />
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

const Home =()=>{
  return <div className='mx-auto w-full text-center py-20'>
    <h2 className='text-2xl font-bold mt-8'>Homepage Under Development</h2>
    <h3 className='text-lg'>Checkout Sign Up, Login, Products and Product Detail pages.</h3>
  </div>
}
export default Home;