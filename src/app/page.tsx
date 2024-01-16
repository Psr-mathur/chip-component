'use client';
import { pDetailsProps } from '@/components/ui/chip';
import { DropdownContainer } from '@/components/ui/dropdown';
import { useState } from 'react';

const data = [
	{
		name: 'Jhon Doe',
		img: 'http://placekitten.com/200/300',
		id: 1,
	},
	{
		name: 'Jane Smith',
		img: 'http://placekitten.com/201/301',
		id: 2,
	},
	{
		name: 'Bob Johnson',
		img: 'http://placekitten.com/202/302',
		id: 3,
	},
	{
		name: 'Alice Brown',
		img: 'http://placekitten.com/203/303',
		id: 4,
	},
	{
		name: 'Charlie Wilson',
		img: 'http://placekitten.com/204/304',
		id: 5,
	},
	{
		name: 'Eva Davis',
		img: 'http://placekitten.com/205/305',
		id: 6,
	},
	{
		name: 'George Miller',
		img: 'http://placekitten.com/206/306',
		id: 7,
	},
	{
		name: 'Olivia White',
		img: 'http://placekitten.com/207/307',
		id: 8,
	},
	{
		name: 'Samuel Taylor',
		img: 'http://placekitten.com/208/308',
		id: 9,
	},
	{
		name: 'Isabella Clark',
		img: 'http://placekitten.com/209/309',
		id: 10,
	},
];
export default function Home() {
	const [selectedChips, setSelectedChips] = useState<pDetailsProps[]>([]);
	return (
		<main className="flex min-h-screen w-full items-center justify-center">
			<DropdownContainer
				items={data}
				selectedChips={selectedChips}
				setSelectedChips={setSelectedChips}
			/>
		</main>
	);
}
