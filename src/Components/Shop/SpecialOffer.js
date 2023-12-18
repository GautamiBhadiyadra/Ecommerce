import React, { useEffect, useState } from 'react'
import RadHeart from '../Icon/RadHeart'
import SpecialOfferCard from './SpecialOfferCard'
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SpecialOfferCartd from './SpecialOfferCartd';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Rating from '@mui/material/Rating';

import { Button } from '@mui/material';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            backgroundColor: 'aliceblue',
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];
function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export const SpecialOffer = () => {
    const [showGrid, setShowGrid] = useState(false);
    const [showOther, setShowOther] = useState(false);
    const [personName, setPersonName] = useState([]);
    useEffect(() => {
        toggleGrid()
    }, [])
    const theme = useTheme();

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [expanded, setExpanded] = useState(false);
    const handleChanges = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };



    const toggleGrid = () => {

        setShowGrid(true);
        setShowOther(false);
    };

    const toggleOther = () => {
        setShowOther(true);
        setShowGrid(false);
    };

    return (
        <div className='mt-28'>
            <div className='container my-0 mx-auto'>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-7 lg:grid-cols-3 lg:gap-8 lg:gap-10">
                    <div>
                        <div class="h-max rounded-lg shadow sm:shadow-md md:shadow-lg  mb-4">
                            <div className='p-7'>
                                <div class="relative w-full mb-6">
                                    <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm h-[50px] text-black bg-[#F4F4F4] rounded-e-lg  border border-gray-300  focus:border-[[#F4F4F4]]   dark:placeholder-black dark:text-white dark:focus:border-blue-500" placeholder="Search Product here" required />

                                    <button type="submit" class="absolute top-0 end-0 p-3.5 text-sm font-medium h-[50px] text-black bg-[#FFC224] rounded-e-lg border  focus:ring-4 focus:outline-none  ">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                        <span class="sr-only">Search</span>
                                    </button>
                                </div>
                                <div className=''>
                                    <h2 className='text-[20px] font-semibold text-[#313131]' >Categories</h2>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChanges('panel1')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                        >
                                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                                Accessories
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                                Aliquam eget maximus est, id dignissim quam.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel2'} onChange={handleChanges('panel2')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2bh-content"
                                            id="panel2bh-header"
                                        >
                                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Dresses</Typography>

                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                                varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                                laoreet.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChanges('panel3')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3bh-content"
                                            id="panel3bh-header"
                                        >
                                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                                Footwear
                                            </Typography>

                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                                amet egestas eros, vitae egestas augue. Duis vel est augue.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel4'} onChange={handleChanges('panel4')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                        >
                                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Jeans</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                                amet egestas eros, vitae egestas augue. Duis vel est augue.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel5'} onChange={handleChanges('panel5')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                        >
                                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Skirts</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                                amet egestas eros, vitae egestas augue. Duis vel est augue.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel6'} onChange={handleChanges('panel6')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                        >
                                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Tops</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                                amet egestas eros, vitae egestas augue. Duis vel est augue.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel7'} onChange={handleChanges('panel7')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                        >
                                            <Typography sx={{ width: '33%', flexShrink: 0 }}>ALL PRODUCT</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                                amet egestas eros, vitae egestas augue. Duis vel est augue.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>


                        </div>
                        <div>
                            <div class="h-max rounded-lg shadow sm:shadow-md md:shadow-lg  mb-4">
                                <div className='p-7'>
                                    <h2 className='text-[20px] font-semibold text-[#313131]'>Best Seller</h2>
                                    <SpecialOfferCartd img='./Assets/img/goggle.png' title='Rentangle EyeGlasses' price='$24.00' />
                                    <SpecialOfferCartd img='./Assets/img/handbag.png' title='Rentangle EyeGlasses' price='$24.00' />
                                    <SpecialOfferCartd img='./Assets/img/shoes1.png' title='Rentangle EyeGlasses' price='$24.00' />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class=" lg:col-span-2">
                        <div className='flex  flex-wrap justify-between'>
                            <h2 className='text-[38px] font-semibold text-[#313131] '>SPECIAL OFFERS</h2>
                            <div className='flex  flex-wrap  items-center '>
                                <div className='mr-3'>
                                    <FormControl sx={{ width: 228, }}>
                                        <Select
                                            multiple
                                            displayEmpty
                                            value={personName}
                                            onChange={handleChange}
                                            input={<OutlinedInput />}
                                            renderValue={(selected) => {
                                                if (selected.length === 0) {
                                                    return <p className='font-normal text-[16px]' >Default Sorting</p>;
                                                }

                                                return selected.join(', ');
                                            }}
                                            MenuProps={MenuProps}
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem disabled value="">
                                                <em>Default Sorting</em>
                                            </MenuItem>
                                            {names.map((name) => (
                                                <MenuItem
                                                    key={name}
                                                    value={name}
                                                    style={getStyles(name, personName, theme)}
                                                >
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className='md:ml-0 sm:mx-4 mx-3 md:my-3 lg:my-0 my-4   h-[50px] w-[107px] bg-[#F4F4F4] flex items-center justify-center text-[16px] font-normal text-[#313131] rounded-[10px] border'>
                                    Items: 12
                                </div>
                                <div className='md:ml-0 sm:mx-4 mx-3 md:my-3 lg:my-0 my-4   h-[50px] w-[107px] bg-[#F4F4F4] flex items-center justify-center text-[16px] font-normal text-[#313131] rounded-[10px] border'>
                                    <button type='button' onClick={toggleOther}>
                                        <FormatListBulletedIcon className='mr-5' />
                                    </button>
                                    <button type='button' onClick={toggleGrid}>
                                        <CalendarViewMonthIcon className=' text-[#FFC224]' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {showGrid && (
                            <div className='grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-1  sm:grid-cols-2  grid-cols-1 gap-x-5 gap-y-20 mb-6 pt-10 '>
                                <SpecialOfferCard img='./Assets/img/goggle.png' details='  Rentangle EyeGlasses' price="$24.00" />
                                <SpecialOfferCard img='./Assets/img/leg.png' details='Lace-up Sneakers' price="$90.00" />
                                <SpecialOfferCard img='./Assets/img/handbag.png' details='Ladies handbag' price="$90.00" />
                                <SpecialOfferCard img='./Assets/img/flats.png' details='Pointed Toe Flats' price="$90.00" />
                                <SpecialOfferCard img='./Assets/img/cap.png' details='Cotton Bucket Hat' price="$90.00" />
                                <SpecialOfferCard img='./Assets/img/ladieshandbag.png' details='Ladies handbag' price="$24.00" />
                                <SpecialOfferCard img='./Assets/img/coco.png' details='Mademoiselle Chanel' price="$90.00" />
                                <SpecialOfferCard img='./Assets/img/jacket.png' details='Violate Denim Jacket' price="$90.00" />
                                <SpecialOfferCard img='./Assets/img/jecket1.png' details='Pointed Toe Flats' price="$90.00" />
                                <SpecialOfferCard img='./Assets/img/shoes1.png' details='Rentangle EyeGlas..' price="$24.00" />
                                <SpecialOfferCard img='./Assets/img/bag.png' details='Ladies handbag' price="$24.00" />
                                <SpecialOfferCard img='./Assets/img/pant.png' details='Pointed Toe Flats' price="$24.00" />
                            </div>
                        )}
                        {showOther && (
                            <div>
                                <div className='pt-7  flex  justify-between shadow-md overflow-hidden mai-h-screen'>
                                    <div className='mr-3'>
                                        <img src='./Assets/img/goggle.png'></img>
                                    </div>
                                    <div className='py-10'>
                                        <p className='text-[28px] font-semibold text-[#313131]'> Rentangle EyeGlasses</p>
                                        <p className='text-[#FF2424]  text-[28px] font-semibold'>$90.00</p>
                                        <Rating name="size-medium" defaultValue={2} />
                                    </div>
                                    <div>
                                        <RadHeart />
                                    </div>
                                </div>
                                <div className='pt-7  flex  justify-between shadow-md overflow-hidden min-h-screen'>
                                    <div className='mr-3'>
                                        <img src='./Assets/img/goggle.png'></img>
                                    </div>
                                    <div className='py-10'>
                                        <p className='text-[28px] font-semibold text-[#313131]'> Rentangle EyeGlasses</p>
                                        <p className='text-[#FF2424]  text-[28px] font-semibold'>$90.00</p>
                                        <Rating name="size-medium" defaultValue={2} />
                                    </div>
                                    <div>
                                        <RadHeart />
                                    </div>
                                </div>
                                {/* <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                    <div class="md:flex">
                                        <div class="md:shrink-0">
                                            <img class="h-48 w-full object-cover md:h-full md:w-48" src="./Assets/img/goggle.png" alt="Modern building architecture"/>
                                        </div>
                                        <div class="p-8">
                                            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                                            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                                            <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        )}
                        <div className='mb-24 pt-5' >
                            <ol className="flex justify-center gap-3 text-xs font-medium">
                                <li>
                                    <a
                                        href="#"
                                        className="inline-flex h-8 w-8 items-center justify-center border border-[#313131] bg-white text-[#313131] rtl:rotate-180"
                                    >
                                        <span className="sr-only">Prev Page</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3 w-3"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="block h-8 w-8  border-[#313131] bg-[#313131] text-center leading-8 text-white"
                                    >
                                        1
                                    </a>
                                </li>

                                <li className="block h-8 w-8  border border-[#313131] bg-white text-center leading-8 text-[#313131]">
                                    2
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="block h-8 w-8  border border-[#313131] bg-white text-center leading-8 text-[#313131]"
                                    >
                                        3
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="inline-flex h-8 w-8 items-center justify-center  border border-[#313131] bg-white text-[#313131] rtl:rotate-180"
                                    >
                                        <span className="sr-only">Next Page</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3 w-3"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
