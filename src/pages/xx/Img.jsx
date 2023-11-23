import axios from "axios";

const Img = () => {

    async function handleFormSubmit(event) {
        event.preventDefault();
        const image = event.target.file.files[0];
        const name = event.target.name.value;

        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`, formData);

            if (response.status === 200) {
                const item = { name, img: response.data.data.display_url };
                console.log(item);
            } else {
                console.log('img uploaded unsuccessful');
            }

        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="file" name="file" className="file-input w-full max-w-xs" /> <br />
                <input type="text" name="name" className="file-input w-full max-w-xs" /> <br />
                <input className="btn" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Img;