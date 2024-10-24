// @ts-nocheck
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { details } from '../details/details.jsx';
import { useSearch } from '../contexts/searchContext.jsx';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';
import { useTopLoader } from '../contexts/topLoderContext.jsx';

const SearchBar = ({ setshowInput, setSetshowInput }) => {
    const [query, setQuery] = useState("");
    const [check, setCheck] = useState(false);
    const [[, setsearchQu]] = useSearch();
    const inputSelect = useRef();
    const [, setSearchP] = useSearchParams({ q: "" });
    const [[, setProgress]] = useTopLoader();

    const count = useRef(-1);
    const [showCount, setShowCount] = useState(-1);

    const allNames = [...details.skills, ...details.projects, ...details.certificates]

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

    useEffect(() => {
        const handleClick = () => {
            setCheck(false);
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, []);

    const stopBouncing = (e) => {
        e.stopPropagation();
    };

    const filteredItems = useMemo(() => {
        return allNames.filter(item => {
            return item.name.toLowerCase().includes(query.toLowerCase());
        });
    }, [query, allNames]);

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
            const selectedItem = filteredItems[count.current];
            if (selectedItem) {
                searchQuery = selectedItem.name;
            } else {
                return;
            }
        }
        setSearchP((prev) => {
            prev.set("q", searchQuery);
            return prev;
        });
        setQuery(searchQuery);
        setsearchQu(searchQuery.toLowerCase());
        navigate('/search');
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
                if (query !== "") {
                    enterFun();
                }
            }
        };

        if (inputSelect.current) {
            inputSelect.current.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            if (inputSelect.current) {
                inputSelect.current.removeEventListener('keydown', handleKeyDown);
            }
        };
    }, [topFun, downFun, enterFun]);

    const ShowSearchResult = React.memo(({ index, showCount, item }) => {
        useEffect(() => {
            if (index === showCount) {
                document.getElementById(`search-item-${index}`).scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            }
        }, [showCount, index]);

        return (
            <Link
                id={`search-item-${index}`}
                to={`/${item.name}`}
                onClick={(e) => {
                    e.preventDefault()
                    setProgress(20);
                    setTimeout(() => {
                        setProgress(100);
                    }, 20);
                    setQuery(item.name);
                    setsearchQu(item.name.toLowerCase());
                    setSearchP((prev) => {
                        prev.set("q", item.name);
                        return prev;
                    });
                    setTimeout(() => {
                        navigate(`/${item.name}`);
                    }, 10);
                    setCheck(false);
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }}
                className={`showBox ${index === showCount ? "selectedIn" : ""}`}
            >
                <span>
                    <IoMdSearch />
                </span>
                <p>{item.name}</p>
                <div className="tellWhat">{item.checkName.slice(0, -1)}</div>
            </Link>
        );
    });

    const backHome = () => {
        screen.width <= 500 ? setSetshowInput((pre) => !pre) : setSetshowInput(false)
    }

    return (
        <div className='searchBar' onClick={stopBouncing}>
            <div className={`inputBoxs ${check ? "borderBottom" : ""}`}>
                <label htmlFor="inputId" onClick={backHome}>
                    {screen.width <= 500 ? <GoArrowLeft /> : <IoMdSearch />}
                </label>
                <input
                    type="search"
                    placeholder='Search'
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
