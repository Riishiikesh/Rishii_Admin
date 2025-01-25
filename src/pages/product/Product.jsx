import { Link } from "react-router-dom"
import "./product.css"
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons"

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/5099868/pexels-photo-5099868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                         alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>

                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="ProductInfoKey">id:</span>
                            <span className="ProductInfoValue">123</span>
                        </div>

                        <div className="productInfoBottom">
                            <div className="productInfoItem">
                                <span className="ProductInfoKey">sales:</span>
                                <span className="ProductInfoValue">5123</span>
                            </div>

                            <div className="productInfoBottom">
                                <div className="productInfoItem">
                                    <span className="ProductInfoKey">active:</span>
                                    <span className="ProductInfoValue">yes</span>
                                </div>

                                <div className="productInfoBottom">
                                    <div className="productInfoItem">
                                        <span className="ProductInfoKey">inn stock:</span>
                                        <span className="ProductInfoValue">no</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="productBottom">
                            <form className="productForm">
                                <div className="productFormLeft">
                                    <label>Product Name</label>
                                    <input type="text" placeholder="Apple AirPod"></input>
                                    
                                    <label>In Stock</label>
                                    <select name="inStock" id="inStock">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>

                                    <label>Active</label>
                                    <select name="Active" id="active">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                                <div className="productFormRight">
                                    <div className="productUpload">
                                        <img src="https://images.pexels.com/photos/5099868/pexels-photo-5099868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                        alt="" className="productUploadImg" />
                                        <label for="file">
                                            <Publish/>
                                        </label>
                                        <input type="file" id="file" style={{display:"none"}}></input>
                                    </div>
                                    <button className="productButton">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
