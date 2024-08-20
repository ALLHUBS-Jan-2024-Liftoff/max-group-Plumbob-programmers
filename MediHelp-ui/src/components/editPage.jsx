export default function editPage(){



return(
    <div>
    <div>
    <label>Username</label>
    <input
    className='class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"'
    type="text"
    name="username"
    value={formData.username}
    onChange={handleChange}
    required
    />
    </div>
    <div>
    <label>Email</label>
    <input
    className='class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"'
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
    />
    </div>
    <div>
    <label>Password</label>
    <input
    className='class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"'
    type="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    required
    />
    </div>
</div>
)
}