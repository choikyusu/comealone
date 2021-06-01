import React, {useState, useReducer, useEffect} from 'react';
import "./css/Filter.css";
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';
import * as filterActions from '../../_reducers/filter_reducer'

const Modal = ( props ) => {
    const dispatch = useDispatch();

    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, apply, filterEat, filterEnjoy, filterFavorite, filterWrite, filterWatch} = props;

    
    const [eat, setEat] = useState(false);
    const [enjoy, setEnjoy] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [write, setWrite] = useState(false);
    const [watch, setWatch] = useState(false);

    const clickEat = () =>{
        setEat(!eat);
    }

    const clickEnjoy = () =>{
        setEnjoy(!enjoy);
    }

    const clickFavorite = () =>{
        setFavorite(!favorite);
    }
    
    const clickWrite = () =>{
        setWrite(!write);
    }
    const clickWatch = () =>{
        setWatch(!watch);
    }

    const filterContents = (items) => {
        dispatch(
            filterActions.filterContents(items)
        );
    }

    useEffect(() =>{
        //적용후 변경된것이 있을때
        apply();

    },[filterEat, filterEnjoy, filterFavorite, filterWrite, filterWatch]);

    const clickApply = () =>{
        filterContents({eat:eat, enjoy:enjoy, favorite: favorite, write : write, watch : watch});
        
        //젹용버튼 클릭후 변경된것이 없을때11
        close();
    }

    const clickClose = () =>{
        setEat(filterEat); 
        setEnjoy(filterEnjoy); 
        setFavorite(filterFavorite);
        setWrite(filterWrite);
        setWatch(filterWatch);
        close();
    }

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <main>
                        <button className="item" onClick={clickEat}> 
                            <a className={"keyword" + (eat ? " selected" : " ")} > 
                                <div class="tit">먹을거리</div> 
                            </a> 
                        </button>
                        <button className="item" onClick={clickEnjoy}> 
                            <a className={"keyword" + (enjoy ? " selected" : " ")}> 
                                <div className="tit">할거리</div> 
                            </a> 
                        </button>
                        <button className="item" onClick={clickFavorite}> 
                            <a className={"keyword" + (favorite ? " selected" : " ")}> 
                                <div className="tit">찜한거</div> 
                            </a> 
                        </button>
                        <button className="item" onClick={clickWrite}> 
                            <a className={"keyword" + (write ? " selected" : " ")}> 
                                <div className="tit">내가쓴</div> 
                            </a> 
                        </button>
                        <button className="item" onClick={clickWatch}> 
                            <a className={"keyword" + (watch ? " selected" : " ")}> 
                                <div className="tit">볼거리</div> 
                            </a> 
                        </button>
                    </main>
                    <footer>
                        <button className="close" onClick={clickClose}> 취소 </button>
                        <button className="close" onClick={clickApply}> 적용 </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    filterContents : (items) => dispatch(filterActions.filterContents(items)),
});

const mapStateToProps = (state) => ({
    filterEat : state.filter.filter.eat,
    filterEnjoy : state.filter.filter.enjoy,
    filterFavorite : state.filter.filter.favorite,
    filterWrite : state.filter.filter.write,
    filterWatch : state.filter.filter.watch,
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Modal);