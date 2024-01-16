/* eslint-disable @next/next/no-img-element */
import { twMerge } from 'tailwind-merge';
import { Chip, pDetailsProps } from './chip';
import {
	ChangeEvent,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import Image from 'next/image';

type DropdownContainerProps = {
	selectedChips: pDetailsProps[];
	setSelectedChips: Dispatch<SetStateAction<pDetailsProps[]>>;
	items: pDetailsProps[];
};
export function DropdownContainer({
	selectedChips,
	setSelectedChips,
	items,
}: DropdownContainerProps) {
	const [listItems, setListItems] = useState<pDetailsProps[]>(items);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [filterItems, setFilteredItems] =
		useState<pDetailsProps[]>(listItems);

	useEffect(() => {
		setFilteredItems([...listItems]);
	}, [listItems]);
	const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
		setFilteredItems(
			[...listItems].filter((d) =>
				d.name.toLowerCase().startsWith(e.target.value)
			)
		);
	};
	console.log(listItems);
	return (
		<div
			className={twMerge(
				' w-[50vh] bg-white/75 rounded-lg h-auto min-h-12 flex flex-wrap relative shadow border-b-2 border-blue-600'
			)}
		>
			{selectedChips.map((c, i) => (
				<Chip
					pDetails={c}
					key={i}
					setListItems={setListItems}
					setSelectedChips={setSelectedChips}
				/>
			))}
			<input
				type="text"
				className="flex-1 h-full px-1 py-3 outline-none"
				// onBlur={() => setIsMenuOpen(false)}
				onFocus={() => setIsMenuOpen(true)}
				onChange={handleFilter}
			/>
			<DropdownItems
				items={filterItems}
				setListItems={setListItems}
				setSelectedChips={setSelectedChips}
				className={twMerge(
					'absolute top-full hidden',
					isMenuOpen && 'flex'
				)}
			/>
		</div>
	);
}

export function DropdownItems({
	items,
	setListItems,
	setSelectedChips,
	className,
}: {
	items: pDetailsProps[];
	setSelectedChips: Dispatch<SetStateAction<pDetailsProps[]>>;
	setListItems: Dispatch<SetStateAction<pDetailsProps[]>>;
	className?: string;
}) {
	return (
		<div
			className={twMerge(
				'flex-col h-56 overflow-y-scroll gap-1 border border-lime-500 min-w-80',
				className
			)}
		>
			{items.map((item, i) => (
				<DropdownItem
					pDetails={item}
					key={i}
					setListItems={setListItems}
					setSelectedChips={setSelectedChips}
				/>
			))}
		</div>
	);
}

type TDropdownItem = {
	pDetails: pDetailsProps;
	setSelectedChips: Dispatch<SetStateAction<pDetailsProps[]>>;
	setListItems: Dispatch<SetStateAction<pDetailsProps[]>>;
};

export function DropdownItem({
	pDetails,
	setSelectedChips,
	setListItems,
}: TDropdownItem) {
	const handleClick = () => {
		console.log('clicked');
		setSelectedChips((prevSelected) => [...prevSelected, pDetails]);
		setListItems((prevListed) => prevListed.filter((x) => x !== pDetails));
	};
	return (
		<div
			className="p-1 flex items-center justify-start gap-2 hover:opacity-80 w-full border border-black"
			onClick={handleClick}
		>
			<img
				src={pDetails.img}
				alt="label"
				className=" h-10 w-10 object-cover object-center overflow-hidden rounded-full"
			/>
			<span>{pDetails.name}</span>
			<span className=" text-black/50 text-[10px]">
				{pDetails.name}.fake@mail.com
			</span>
		</div>
	);
}
