import React from "react";

const Contact = () => {
	return (
		<div className="pt-36 pb-32">
			<div className="container">
				<div className="w-full px-4">
					<div className="mx-auto mb-16 max-w-xl text-center">
						<h4 className="mb-2 text-lg font-semibold text-primary">Hubungi Kami</h4>
					</div>
					<div className="flex flex-wrap">
						<div className="w-full px-4 lg:w-1/2 xl:w-1/3">
							<div className="mb-10 rounded-lg bg-teal-50 p-10">
								<i className="fas fa-address-book text-4xl text-primary"></i>
								<div className="pt-8">
									<h2 className="mb-3 block text-2xl font-semibold text-secondary">Alamat</h2>
									<p className="text-base font-medium leading-7 text-gray-800">
										Magetan, Jawa Timur, 63395
									</p>
								</div>
							</div>
						</div>
						<div className="w-full px-4 lg:w-1/2 xl:w-1/3">
							<div className="mb-10 rounded-lg bg-teal-50 p-10">
								<i className="fas fa-phone text-4xl text-primary"></i>
								<div className="pt-8">
									<h2 className="mb-3 block text-2xl font-semibold text-secondary">
										Nomor Telepon
									</h2>
									<p className="text-base font-medium leading-7 text-gray-800">
										+62 87 758 524 277
									</p>
								</div>
							</div>
						</div>
						<div className="w-full px-4 lg:w-1/2 xl:w-1/3">
							<div className="mb-10 rounded-lg bg-teal-50 p-10">
								<i className="fas fa-envelope text-4xl text-primary"></i>
								<div className="pt-8">
									<h2 className="mb-3 block text-2xl font-semibold text-secondary">Email</h2>
									<p className="text-base font-medium leading-7 text-gray-800">
										bimahayunugraha@gmail.com
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
