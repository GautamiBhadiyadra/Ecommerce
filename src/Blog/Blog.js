import React, { useEffect, useState } from 'react'

import { useTheme } from '@mui/material/styles';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import SpecialOfferCartd from '../Components/Shop/SpecialOfferCartd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ManFillColor from '../Components/Icon/ManFillColor';
import BlogDetail from './BlogDetail';




const Blog = () => {
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
                                    <SpecialOfferCartd img='./Assets/img/two-beautiful-women.png' width='110px' height='80px' title='Rentangle EyeGlasses' price='$24.00' />
                                    <SpecialOfferCartd img='./Assets/img/shopingwhomen.png' width='110px' height='80px' title='Rentangle EyeGlasses' price='$24.00' />
                                    <SpecialOfferCartd img='./Assets/img/couple-showing.png' width='110px' height='80px' title='Rentangle EyeGlasses' price='$24.00' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" lg:col-span-2 pt-5">
                        <div>

                            <BlogDetail img={'./Assets/img/studio-close.png'} title={'How To Find The Right Fashion For Your Specific Product'} />
                            <BlogDetail img={'./Assets/img/mother-daughter-dancing .png'} title={'The best fashion sartorial inspiration'} />
                            <BlogDetail img={'./Assets/img/pretty-young-stylish.png'} title={'The best fashion sartorial inspiration'} />
                        </div>
                        <div className='mb-24 pt-12' >
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
export default Blog
