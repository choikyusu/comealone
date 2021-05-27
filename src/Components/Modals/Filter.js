import React, {useState, useReducer} from 'react';
import "./css/Filter.css";
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';
import * as filterActions from '../../_reducers/filter_reducer'

const Modal = ( props ) => {
    const dispatch = useDispatch();

    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, apply, header, eat1} = props;
    const [eat, setEat] = useState(eat1);
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

    const clickApply = () =>{
        filterContents({eat:eat, enjoy:enjoy, favorite: favorite, write : write, watch : watch});
        apply();
    }

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <main>
                        <button class="item" onClick={clickEat}> 
                            <a className={"keyword" + (eat ? " selected" : " ")} > 
                                <div class="tit">먹을거리</div> 
                            </a> 
                        </button>
                        <button class="item" onClick={clickEnjoy}> 
                            <a class={"keyword" + (enjoy ? " selected" : " ")}> 
                                <div class="tit">할거리</div> 
                            </a> 
                        </button>
                        <button class="item" onClick={clickFavorite}> 
                            <a class={"keyword" + (favorite ? " selected" : " ")}> 
                                <div class="tit">찜한거</div> 
                            </a> 
                        </button>
                        <button class="item" onClick={clickWrite}> 
                            <a class={"keyword" + (write ? " selected" : " ")}> 
                                <div class="tit">내가쓴</div> 
                            </a> 
                        </button>
                        <button class="item" onClick={clickWatch}> 
                            <a class={"keyword" + (watch ? " selected" : " ")}> 
                                <div class="tit">볼거리</div> 
                            </a> 
                        </button>
                    </main>
                    <footer>
                        <button className="close" onClick={close}> 취소 </button>
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
    eat1 : state.filter.filter.eat,
    enjoy1 : state.filter.filter.enjoy

});
  
export default connect(mapStateToProps, mapDispatchToProps)(Modal);