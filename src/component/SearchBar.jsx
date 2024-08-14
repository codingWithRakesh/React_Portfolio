import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { details } from '../details/details.jsx';
import { useSearch } from '../contexts/searchContext.jsx';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';

const SearchBar = ({setshowInput, setSetshowInput}) => {
    const [query, setQuery] = useState("");
    const [check, setCheck] = useState(false);
    const [[searchQu, setsearchQu]] = useSearch();
    const inputSelect = useRef();
    const [searchP, setSearchP] = useSearchParams({ q: "" });
    const q = searchP.get("q");

    const count = useRef(-1);
    const [showCount, setShowCount] = useState(-1);

    const inputFun = (e) => {
        setQuery(e.target.value);
        setSearchP((prev) => {
            prev.set("q", e.target.value);
            return prev;
        });
        if (e.target.value === "") {
            count.current = -1;
            setShowCount(count.current);
            setCheck(false);
        } else {
            setCheck(true);
        }
    };

    window.addEventListener("click", () => {
        setCheck(false);
    });

    const stopBouncing = (e) => {
        e.stopPropagation();
    };

    const filteredItems = useMemo(() => {
        return details.projects.map((data) => data.name).filter(item => {
            return item.toLowerCase().includes(query.toLowerCase());
        });
    }, [query]);

    const itemLength = filteredItems.length;

    const downFun = useCallback(() => {
        if (count.current < filteredItems.length - 1) {
            count.current += 1;
        } else if (count.current === filteredItems.length - 1) {
            count.current = 0;
        }
        setShowCount(count.current);
    }, [itemLength]);

    const navigate = useNavigate();

    const enterFun = useCallback(() => {
        let searchQuery;
        if (count.current === -1) {
            searchQuery = query;
        } else {
            searchQuery = filteredItems[count.current];
        }
        setSearchP((prev) => {
            prev.set("q", searchQuery);
            return prev;
        });
        setQuery(searchQuery);
        setsearchQu(searchQuery.toLowerCase());
        navigate('/projects');
        setCheck(false);
    }, [filteredItems, query, setSearchP, setsearchQu, navigate]);

    const topFun = useCallback(() => {
        count.current > 0 ? count.current -= 1 : count.current = filteredItems.length - 1;
        setShowCount(count.current);
    }, [itemLength]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowUp') {
                topFun();
            } else if (event.key === 'ArrowDown') {
                downFun();
            } else if (event.key === "Enter") {
                enterFun();
            }
        };

        inputSelect.current.addEventListener('keydown', handleKeyDown);

        return () => {
            inputSelect.current.removeEventListener('keydown', handleKeyDown);
        };
    }, [topFun, downFun, enterFun]);

    const ShowSearchResult = React.memo(({ index, showCount, item }) => {
        return (
            <div onClick={() => {
                setQuery(item);
                setsearchQu(item.toLowerCase());
                setSearchP((prev) => {
                    prev.set("q", item);
                    return prev;
                });
                navigate('/projects');
                setCheck(false);
            }} className={`showBox ${index === showCount ? "selectedIn" : ""}`}>
                <span>
                    <IoMdSearch />
                </span>
                <p>{item}</p>
            </div>
        );
    });

    const backHome = () => {
        screen.width <= 500 ? setSetshowInput(!setshowInput) : setSetshowInput(false)
    }

    return (
        <div className='searchBar' onClick={stopBouncing}>
            <div className={`inputBoxs ${check ? "borderBottom" : ""}`}>
                <label htmlFor="inputId" onClick={backHome}>
                    {screen.width <= 500 ? <GoArrowLeft /> : <IoMdSearch />}
                </label>
                <input 
                    type="search" 
                    placeholder='Search for Projects' 
                    id='inputId' 
                    ref={inputSelect} 
                    value={query} 
                    onChange={inputFun} 
                />
            </div>
            {check && <div className="showSarchResult">
                {filteredItems.map((item, index) => (
                    <ShowSearchResult key={index} index={index} showCount={showCount} item={item} />
                ))}
            </div>}
        </div>
    );
};

export default SearchBar;
