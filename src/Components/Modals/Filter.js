import React, {useState} from 'react';
import "./css/Filter.css";

const Modal = ( props ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴

    const [eat, setEat] = useState(false);
    
    const clickEat = () =>{
        setEat(!eat);
    }

    const { open, close, header } = props;
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
                        <button class="item"> 
                            <a class="keyword"> 
                                <div class="tit">할거리</div> 
                            </a> 
                        </button>
                        <button class="item"> 
                            <a class="keyword"> 
                                <div class="tit">찜한거</div> 
                            </a> 
                        </button>
                        <button class="item"> 
                            <a class="keyword"> 
                                <div class="tit">내가쓴</div> 
                            </a> 
                        </button>
                        <button class="item"> 
                            <a class="keyword"> 
                                <div class="tit">볼거리</div> 
                            </a> 
                        </button>
                    </main>
                    <footer>
                        <button className="close" onClick={close}> 취소 </button>
                        <button className="close" onClick={close}> 적용 </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default Modal;