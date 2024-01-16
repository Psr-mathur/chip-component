/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { CloseIcon } from '../icons/close';
import { Dispatch, SetStateAction } from 'react';

export type pDetailsProps = {
	id: number | string;
	name: string;
	img: string;
};

export type ChipProps = {
	pDetails: pDetailsProps;
	setSelectedChips: Dispatch<SetStateAction<pDetailsProps[]>>;
	setListItems: Dispatch<SetStateAction<pDetailsProps[]>>;
};
export function Chip({ pDetails, setSelectedChips, setListItems }: ChipProps) {
	const handleDelete = () => {
		setSelectedChips((prevSelected) =>
			[...prevSelected].filter((item) => item.id !== pDetails.id)
		);
		setListItems((prevLists) => [...prevLists, pDetails]);
	};
	return (
		<div className="p-1 m-1 flex items-center justify-center gap-1 border">
			<div className="">
				<img
					src={pDetails.img}
					alt="label"
					className="h-10 w-10 overflow-clip object-cover object-center rounded-[40px]"
				/>
			</div>
			<span>{pDetails.name}</span>
			<button
				onClick={handleDelete}
				className=" border p-1 px-3 rounded-full bg-[lightslategray]"
			>
				X
			</button>
		</div>
	);
}
